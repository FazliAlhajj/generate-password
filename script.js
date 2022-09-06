function genPassword(){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordLength = 8
    let password = ''
    // let randomNumber = Math.floor(Math.random() * chars.length)
    // console.log(randomNumber)
    // let cekSubstring = chars.substring(10,12)
    // console.log(cekSubstring)
        for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1)
    }
    document.getElementById('password').value = password
}

function copyPassword(){
    const copyText = document.getElementById('password')
    copyText.select()
    copyText.setSelectionRange(0, 999)
    document.execCommand('copy')
    alert('Password berhasil disalin')
}