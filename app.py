import streamlit as st
from movies import movies
from collections import Counter
import math

st.set_page_config(page_title="Cinefy — Streamlit", layout="wide")

if 'ratings' not in st.session_state:
    st.session_state.ratings = {}
if 'watchlist' not in st.session_state:
    st.session_state.watchlist = []

def score_content(movie, liked_ids):
    # Simple content-based score: genre overlap + keyword overlap
    score = 0
    liked = [m for m in movies if m['id'] in liked_ids]
    liked_genres = Counter(g for m in liked for g in m.get('genres', []))
    liked_keywords = Counter(k for m in liked for k in m.get('keywords', []))
    for g in movie.get('genres', []):
        score += liked_genres.get(g, 0) * 2
    for k in movie.get('keywords', []):
        score += liked_keywords.get(k, 0)
    # boost by IMDb-like rating
    score += (movie.get('rating', 0) - 6) * 0.5
    return score

def recommend_for_user(top_n=12):
    liked_ids = [int(i) for i, r in st.session_state.ratings.items() if r >= 4]
    if not liked_ids:
        return sorted(movies, key=lambda m: m.get('rating', 0), reverse=True)[:top_n]
    scored = [(m, score_content(m, liked_ids)) for m in movies if m['id'] not in liked_ids]
    scored.sort(key=lambda x: x[1], reverse=True)
    return [m for m, s in scored[:top_n]]

st.sidebar.title('Cinefy — Controls')
query = st.sidebar.text_input('Search')
genre = st.sidebar.selectbox('Genre', options=['All'] + sorted({g for m in movies for g in m.get('genres', [])}))
min_rating = st.sidebar.slider('Min IMDb Rating', 0.0, 10.0, 6.0, 0.1)
st.sidebar.markdown('---')
if st.sidebar.button('Clear ratings'):
    st.session_state.ratings.clear()
if st.sidebar.button('Clear watchlist'):
    st.session_state.watchlist = []

st.title('Cinefy — Movie Recommender (Streamlit)')

col1, col2 = st.columns([2,1])

with col2:
    st.header('Your Ratings')
    if st.session_state.ratings:
        for mid, r in st.session_state.ratings.items():
            m = next((x for x in movies if x['id'] == int(mid)), None)
            if m:
                st.write(f"**{m['title']}** — {r}/5")
    else:
        st.write('No ratings yet — rate a movie from the list.')
    st.markdown('---')
    st.header('Watchlist')
    if st.session_state.watchlist:
        for mid in st.session_state.watchlist:
            m = next((x for x in movies if x['id'] == int(mid)), None)
            if m:
                st.write(f"- {m['title']}")
    else:
        st.write('Your watchlist is empty')

with col1:
    st.header('Recommendations')
    recs = recommend_for_user(20)
    # apply filters
    filtered = []
    for m in recs:
        if genre != 'All' and genre not in m.get('genres', []):
            continue
        if m.get('rating', 0) < min_rating:
            continue
        if query and query.lower() not in (m.get('title','') + ' ' + m.get('description','')).lower():
            continue
        filtered.append(m)

    for movie in filtered:
        cols = st.columns([1,3])
        with cols[0]:
            if movie.get('poster'):
                st.image(movie['poster'], use_column_width=True)
            else:
                st.write('No image')
        with cols[1]:
            st.subheader(f"{movie['title']} ({movie.get('year','')})")
            st.write(movie.get('description',''))
            st.write('Genres: ' + ', '.join(movie.get('genres', [])))
            st.write(f"IMDb: {movie.get('rating', 'N/A')}")
            # Rating widget
            key = f"rate_{movie['id']}"
            val = st.radio('Rate', options=[0,1,2,3,4,5], index=st.session_state.ratings.get(str(movie['id']),0), key=key, horizontal=True)
            if st.button('Save rating', key=f'save_{movie["id"]}'):
                st.session_state.ratings[str(movie['id'])] = val
                st.experimental_rerun()
            if st.button('Add to watchlist', key=f'watch_{movie["id"]}'):
                if movie['id'] not in st.session_state.watchlist:
                    st.session_state.watchlist.append(movie['id'])
                    st.experimental_rerun()

st.markdown('---')
st.info('This Streamlit migration is a lightweight reimplementation. For production, deploy on Streamlit Cloud or a suitable host.')
