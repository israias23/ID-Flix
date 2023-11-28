import QRCode from 'react-qr-code'

import { QRCodeContainer, StyledButton } from './components'

const link = 'https://id-flix.vercel.app/'

export function QRCodePage() {
  function downloadQRIntoPNG() {
    // função do `jonasdev` (https://github.com/rosskhanas/react-qr-code/issues/135#issuecomment-748064710)
    const svg = document.getElementById('qrcode')
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = function () {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')

      const downloadLink = document.createElement('a')
      downloadLink.download = 'qrcode'
      downloadLink.href = `${pngFile}`
      downloadLink.click()
    }

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-light-background dark:bg-dark-background">
      <div className="text-center text-light-text dark:text-dark-text">
        <h1 className="text-xl font-bold">IDFlix em QRCode</h1>
        <p className="italic">{link}</p>
      </div>
      <QRCodeContainer>
        <QRCode value={link} id="qrcode" className="fill-dark-primary" />
      </QRCodeContainer>

      <div className="mt-2 flex gap-4">
        {/* <StyledButton>Baixar como PDF</StyledButton> */}
        <StyledButton onClick={downloadQRIntoPNG}>Baixar como PNG</StyledButton>
      </div>
    </div>
  )
}
