export default {
    name:"featured",
    type:"document",
    title:"Featured Menu Categories",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Featured Category Name",
            validation: (Rule) => Rule.required()
        },

        {
            name:"short_description",
            type:"string",
            title:"Short description",
            validation:(Rule) => Rule.max(200)
        },

        {
            name:"resturants",
            type:"array",
            title:"Resturants",
            of:[{type:"reference", to:[{type:"resturant"}]}]
        }
    ]
}