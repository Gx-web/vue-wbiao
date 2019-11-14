const BASRURL = "http://47.96.160.111:3000/api"
const getZixunurl = `${BASRURL}/zixuninfo`

export default {
    async getzixunInfo(){
        // fetch(getHomeurl).then( res =>{
        //     res.json().then(cb)
        // })
        let res = await fetch(getZixunurl)
        return await res.json()
    }
}