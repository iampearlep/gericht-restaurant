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
      const res2 = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef');
      setMeals(res2.data.meals);
    }

    fetchData()
  }, []);

  // const FetchMealData = (e) => {
  //   // axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${}`);
  //   console.log('button was clicked');
  //   console.log(e.target.value)
  // }

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
         <button className='bg-primary py-2 font-bold px-10' onClick={() => setCategory(category?.strCategory)}>
         {item?.strCategory}
         </button>
        </div>
      )
     })}
    </div>
   <div className='flex flex-col md:grid md:grid-cols-4 mx-auto w-full px-5 gap-x-10 gap-y-4'>
    {meals?.map((meal) => {
      return(
        <div key={meal.idMeal} className=' border border-primary mt-10'>
          <div className=''>
          <img src={meal.strMealThumb} alt="" />
          </div>
          <h3 className='text-white'>{meal.strMeal}</h3>
        </div>
      )
    })}
   </div>
       </div>
  )
}

export default Meals