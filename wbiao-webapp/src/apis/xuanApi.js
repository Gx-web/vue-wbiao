const BASRURL = "http://47.96.160.111:3000/api"
const getXuanBiaourl = `${BASRURL}/xuaninfo`

export default {
    async getXuanBiaoInfo(){
        // fetch(getHomeurl).then( res =>{
        //     res.json().then(cb)
        // })
        let res = await fetch(getXuanBiaourl)
        return await res.json()
    }
}