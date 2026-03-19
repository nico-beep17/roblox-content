# Roblox Content Machine – Placeholder Validator
# Run this AFTER replacing your real credential IDs to check for any you missed.
# Usage: Right-click → Run with PowerShell  (or: powershell .\check-placeholders.ps1)

$files = @(
    "n8n-workflow-1-daily-director.json",
    "n8n-workflow-3-the-publisher.json",
    "n8n-social-upload-nodes.json"
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$found = $false

Write-Host "`n🔍 Scanning n8n workflow files for unreplaced placeholders...`n" -ForegroundColor Cyan

foreach ($file in $files) {
    $path = Join-Path $scriptDir $file
    if (-not (Test-Path $path)) {
        Write-Host "⚠️  File not found: $file" -ForegroundColor Yellow
        continue
    }

    $content = Get-Content $path -Raw
    $matches = [regex]::Matches($content, 'YOUR_[A-Z_]+')

    if ($matches.Count -gt 0) {
        $found = $true
        $unique = $matches | ForEach-Object { $_.Value } | Sort-Object -Unique
        Write-Host "❌ $file — $($unique.Count) placeholder(s) remaining:" -ForegroundColor Red
        foreach ($placeholder in $unique) {
            Write-Host "      • $placeholder" -ForegroundColor DarkRed
        }
    } else {
        Write-Host "✅ $file — all placeholders replaced!" -ForegroundColor Green
    }
}

if (-not $found) {
    Write-Host "`n🎉 All clear! Every placeholder has been replaced. You're ready to import into n8n." -ForegroundColor Green
} else {
    Write-Host "`n📝 Replace the remaining placeholders above, then re-run this script." -ForegroundColor Yellow
}

Write-Host ""
