import QRCode from 'react-qr-code'

// Link para o qual o usuário será direcionado
const link = 'https://id-flix.vercel.app/'

export function QRCodePage() {
  // Configurações do QR Code
  // const qrcode = new QRCode('qrcode', {
  //   text: link,
  //   width: 228,
  //   height: 228,
  //   margin: 30,
  // })

  // Função para baixar o QR Code como PDF ou PNG
  function downloadQR(format) {
    // const canvas = document.getElementById('qrcode')
    // const link = document.createElement('a')

    if (format === 'png') {
      // // Baixar como PNG
      // link.href = canvas.toDataURL('image/png')
      // link.download = 'qrcode.png'
      // link.click()

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
  }

  return (
    <>
      <div className="text">
        <h1>Yor Website in QR Code</h1>
        <p>{link}</p>
      </div>
      {/* <div id="qrcode">{qrcode}</div> */}
      <QRCode value={link} id="qrcode" fill="currentColor" />

      <div className="styleButton">
        <button>Baixar como PDF</button>
        <button onClick={() => downloadQR('png')}>Baixar como PNG</button>
      </div>
    </>
  )
}
