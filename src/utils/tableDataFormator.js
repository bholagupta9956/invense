export const tableDataFormator = (heading , content) =>{
    
    const contenteData = content.map((item,index) =>{
        const val = {
            id : index , 
            company : item.name ,
            comapanyId : item._id
        }
        return val
    })
}