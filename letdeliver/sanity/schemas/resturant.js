export default {
  name:"resturant",
  title:"Resturant",
  type:"document",
  fields: [
    {
      name:"name",
      title:"Resturant Name",
      type:"string",
      validation:( Rule )=> Rule.required()
    },

    {
      name:"short_description",
      title:"Short_description",
      type:'string',
      validation: (Rule) => Rule.max(200)
    },

    {
      name:"image",
      type:"image",
      title:"Image of the resturant"
    },

    {
      name:"lat",
      type:"number",
      title:'Latitude of the resturant'
    },

    {
      name:"longitude",
      type:"number",
      title:"Longitude of the resturant"

    },
    {
      name:"address",
      title:"Address of the resturant",
      type:"string",
      validation: (Rule)=> Rule.required()
    },

    {
      name:"rating",
      title:"Resturant rating",
      type:"number",
      validation:(Rule) => Rule.required() 
      .max(5) 
      .min(1) 
      .error("please enter a value between 1 and 5")
    },

    {
      name:"type",
      title:"Category",
      type:"reference",
      to:[{type:"category"}]
    },

    {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[{type:"reference",to:[{type:"dish"}] }]
    }


  ]
}  