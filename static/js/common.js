export default{
    timeStamp:function(time) {
       return new Date(parseInt(time + '000')).toLocaleString().split(' ')[0];
    },
    footertab(that){
    	let path = that.$route.path;
    	//console.log(that.$store.state.tabData)
    	switch(path)
		{
			case '/index':
			  that.$store.commit('tabClick','index')
			  break;
			case '/erp':
			  that.$store.commit('tabClick','erp')
			  break;
			case '/ycya':
			  that.$store.commit('tabClick','ycya')
			  break;
			case '/workdiary':
			  that.$store.commit('tabClick','workdiary')
			  break;
			case '/my':
			  that.$store.commit('tabClick','my')
		}
    },
}