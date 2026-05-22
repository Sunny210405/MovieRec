$root = Resolve-Path (Join-Path $PSScriptRoot '..')
$port = 5173
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
$listener.Start()

$mimeTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.css' = 'text/css; charset=utf-8'
  '.js' = 'application/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.svg' = 'image/svg+xml'
  '.png' = 'image/png'
  '.jpg' = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.webp' = 'image/webp'
  '.ico' = 'image/x-icon'
}

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()

    while ($reader.Peek() -gt -1) {
      $line = $reader.ReadLine()
      if ([string]::IsNullOrEmpty($line)) { break }
    }

    $requestPath = 'index.html'
    if ($requestLine -match '^GET\s+([^\s]+)') {
      $requestPath = [Uri]::UnescapeDataString($matches[1].Split('?')[0].TrimStart('/'))
      if ([string]::IsNullOrWhiteSpace($requestPath)) {
        $requestPath = 'index.html'
      }
    }

    $target = Join-Path $root $requestPath
    $resolved = $null
    if (Test-Path -LiteralPath $target -PathType Leaf) {
      $resolved = Resolve-Path -LiteralPath $target
    }

    if ($resolved -and $resolved.Path.StartsWith($root.Path)) {
      $bytes = [System.IO.File]::ReadAllBytes($resolved.Path)
      $extension = [System.IO.Path]::GetExtension($resolved.Path).ToLowerInvariant()
      $contentType = 'application/octet-stream'
      if ($mimeTypes.ContainsKey($extension)) {
        $contentType = $mimeTypes[$extension]
      }
      $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
    } else {
      $bytes = [System.Text.Encoding]::UTF8.GetBytes('Not found')
      $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
    }

    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($bytes, 0, $bytes.Length)
  } finally {
    $client.Close()
  }
}
