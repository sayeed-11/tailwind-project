import React, { useEffect, useState } from 'react'
import { bestRecipes } from './Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { settings } from './Settings';

const Menu = () => {

  const [category, setCategory] = useState([])
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('beef')
  const [id, setId] = useState(0);

  const SearchData = (strCategory) => {
    setSearchValue(strCategory);
  }
  
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then(response => {
      setCategory(response.data.meals)

      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchValue}`).then((response) => {
        setData(response.data.meals)
      })
    })
  }, [searchValue])


  return (
    <div id='menu' className='h-auto w-full bg-slate-200 pt-16 md:px-10 px-2 dark:bg-neutral-950'>
      {<SlideHeader/>}
      {<ItemSlider settings={settings} />}
      <div className='mt-16'>
        {<Categories category={category} id={id} setId={setId} SearchData={SearchData} />}
        {<CategoryItems data={data} />}
      </div>
    </div>
  )
}

export default Menu

const SlideHeader = () => {
  return (
    <div className="heading relative flex justify-center h-12 items-center">
      <div className='absolute w-[130px] bg-green-500 h-[110%] rounded-md' />
      <h1 className='text-green-500 absolute h-full text-center text-2xl uppercase font-extrabold tracking-widest inline-block bg-white w-48 shadow-lg pt-2'>Menu</h1>
    </div>
  )
}


const CategoryItems = ({ data }) => {
  return (
    <div className='categories-items grid md:grid-cols-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-h-[400px] overflow-y-auto'>

      {
        data.map((item) => {
          return (
            <div className='p-3 bg-slate-100 md:mx-3 md:my-5 mx-2 my-2 shadow-md dark:bg-white/15'>
              <img className='w-full aspect-square rounded-xl' src={item.strMealThumb} alt="" />
              <h1 className='text-sm mt-3 font-bold text-green-500 text-ellipsis overflow-hidden text-nowrap'>{item.strMeal}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

const Categories = ({ category, id, setId, SearchData }) => {
  return (
    <div>
      <h1 className='uppercase font-bold text-green-500 pl-3 category-list'>Categories</h1>
      <div className="categories flex justify-between overflow-auto py-5 px-2 border-b-2 border-green-500 max-w-[1300px] rounded-md">
        {
          category.map((item, index) => {
            return (
              <button className='bg-white text-green-500 px-3 py-1 mx-1 text-sm shadow-md' style={{ color: id === index ? '#FFF' : '#00D100', backgroundColor: id === index ? '#00D100' : '#FFF' }} onClick={() => { SearchData(item.strCategory); setId(index); }} >
                <h1>{item.strCategory}</h1>
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

const ItemSlider = () => {
  return (
    <div className="best-recipes  py-5 px-5">
      <h1 className='text-lg font-extrabold pl-3 text-green-500'>Ours Best Recipes</h1>
      <Slider {...settings}>
        {
          bestRecipes.map((item) => {
            return (
              <div className='p-2'>
                <div className='bg-white p-2 shadow-md  md:h-auto dark:bg-white/15'>
                  <div className="imgBox">
                    <img className='w-full md:h-56 h-36 object-cover rounded-xl' src={item.src} alt="" />
                  </div>
                  <div className="item-info py-2">
                    <p className='text-xs text-ellipsis overflow-hidden text-nowrap font-bold dark:text-white'>{item.name}</p>
                    <div className='flex justify-between items-center mt-3'>
                      <div className="star">
                        {
                          new Array(5).fill(0).map(() => {
                            return (
                              <FontAwesomeIcon icon={faStar} color='#000' className='text-[.5rem] text-green-500' />
                            )
                          })
                        }
                      </div>
                      <button className='text-xs bg-green-500 py-1 px-2 text-white uppercase'>details</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}