const BASRURL = "http://47.96.160.111:3000/api"
const getHomeurl = `${BASRURL}/homeinfo`

export default {
    async getHomeInfo(){
        // fetch(getHomeurl).then( res =>{
        //     res.json().then(cb)
        // })
        let res = await fetch(getHomeurl)
        return await res.json()
    }
}