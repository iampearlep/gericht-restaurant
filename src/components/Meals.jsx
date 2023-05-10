import React, {useState, useEffect} from 'react'
import axios from 'axios'
//www.themealdb.com/api/json/v1/1/filter.php?c=
const Meals= () => {
  const [category, setCategory] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const res1 = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setCategory(res1.data.categories);
      const res2 = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken');
      setMeals(res2.data.meals);
    }

    fetchData()
    // axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    // .then(res => {
    //   // console.log(response.data.categories[0].strCategory);
    //   // console.log(res.data.categories);
    //   setCategory(res.data.categories)
    // })
  }, []);



  return (
    <div className='bg-primaryBlack  pt-14'>
      <h2 className='text-xl md:text-3xl font-semibold text-white text-center'>Select Category</h2>
     {/* <button>{data[1].strCategory}</button>  */}
     {/* <div key={data.categories.idCategory}>
      {data.categories.strCategory}
     </div> */}
    <div className='flex items-center justify-center flex-wrap gap-6 mt-6'>
    {category?.map((item) => {
      return (
        <div key={item.idCategory} className=''>
         <button className='bg-primary py-2 font-bold px-10'>
         {item?.strCategory}
         </button>
        </div>
      )
     })}
    </div>
   <div className='flex flex-col md:flex-wrap justify-center items-center mx-auto w-11/12 gap-3'>
    {meals?.map((meal) => {
      return(
        <div key={meal.idMeal} className='md:w-3/12 border border-primary mt-10'>
          <div className=''>
          <img src={meal.strMealThumb} alt="" />
          </div>
          <h3 className='text-white'>{meal.strMeal}</h3>
        </div>
      )
    })}
   </div>
     {/* <button key={data[0].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg'>{data[0].strCategory}</button>
     <button key={data[1].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[1].strCategory}</button>
     <button key={data[2].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[2].strCategory}</button>
     <button key={data[3].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[3].strCategory}</button>
     <button key={data[4].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[4].strCategory}</button>
     <button key={data[5].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[5].strCategory}</button>
     <button key={data[6].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[6].strCategory}</button>
     <button key={data[7].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[7].strCategory}</button>
     <button key={data[8].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[8].strCategory}</button>
     <button key={data[9].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[9].strCategory}</button>
     <button key={data[10].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[10].strCategory}</button>
     <button key={data[11].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[11].strCategory}</button>
     <button key={data[12].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[12].strCategory}</button>
     <button key={data[13].idCategory} className='bg-primary px-6 py-2 font-semibold text-lg' >{data[13].strCategory}</button> */}
     
       </div>
  )
}

export default Meals