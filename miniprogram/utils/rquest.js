function serve({name,data}){
  console.log(data)
  return new Promise((resolve,reject)=>{
    wx.cloud.callFunction({
      name,
      data: data
    }).then((resp) => {
      if(resp.result){
        const {data} = resp.result
        resolve(data)
      }
    }).catch((e) => {
      reject(e)
    })
  })
}

module.exports = {
  serve
}