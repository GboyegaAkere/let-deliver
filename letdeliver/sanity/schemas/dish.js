export default {
    name:"dish",
    type:"document",
    title:"Dish",
    fields:[
                {
                    name:"dish",
                    title:"Name of the dish",
                    type:"string"
                },
                {
                    name:"short_description",
                    title:"Short desription of the dish",
                    type:"string",
                    validation:(Rule)=> Rule.max(200)
                },
        
                {
                    name:"price",
                    type:"number",
                    title:"Dish price"
                },
        
                {
                    name:"image",
                    type:"image",
                    title:"Image of the dish"
                }
            ]
}


