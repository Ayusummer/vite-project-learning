type NameList = {
    name: string
}

export const axios = (url: string):Promise<NameList[]> => {
    return new Promise((resolve)=> {
        let xhr: XMLHttpRequest = new XMLHttpRequest()
        
        xhr.open('GET', url)
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 等 2s 返回信息
                setTimeout(() => {
                    resolve(JSON.parse(xhr.responseText))
                }, 2000);
                
            }
        }

        xhr.send()
    })
    
}