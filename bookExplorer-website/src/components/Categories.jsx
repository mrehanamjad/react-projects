import React from 'react'
import SmCard from './SmCard'

function Categories({classNames = 'h-32'}) {
  return (
    <div id='t' className={`w-full flex items-center justify-center gap-3 ${classNames}`}>
    <SmCard link={"/books/all"} imgSrc={'https://cdn.pixabay.com/photo/2013/07/13/13/52/school-161702_1280.png'} txt={"All"} ImgClassName={"h-20"} />
    <SmCard link={"/books/programming"} imgSrc={'https://cdn.pixabay.com/photo/2021/03/27/06/31/code-6127616_1280.png'} txt={"Progremming"} ClassName='text-sm' />
    <SmCard link={"/books/techandeconomics"} imgSrc={'https://cdn.pixabay.com/photo/2020/02/15/16/28/bitcoin-4851375_1280.png'} txt={"Tech & Economics"} ClassName='text-[12px] font-extrabold' />
    <SmCard link={"/books/maths"} imgSrc={'https://cdn.pixabay.com/photo/2021/10/05/21/46/math-6683827_1280.png'} txt={"Maths"}  />
    <SmCard link={"/books/sports"} imgSrc={'https://cdn.pixabay.com/photo/2013/07/13/13/34/football-161132_1280.png'} txt={"Sports"} ImgClassName='h-20'/>
    <SmCard link={"/books/biography"} imgSrc={'https://www.shutterstock.com/image-vector/cv-vector-out-line-icon-600nw-1396258601.jpg'} txt={"Biography"} />
    <SmCard link={"/books/wildlife"} imgSrc={'https://cdn.pixabay.com/photo/2015/07/06/13/55/giraffe-833325_1280.png'} txt={"Wildlife"}  />
    <SmCard link={"/books/marvel"} imgSrc={'https://cdn.pixabay.com/photo/2018/03/11/09/44/logo-3216310_1280.png'} txt={"Marvel"}  />
    <SmCard link={"/books/cooking"} imgSrc={'https://cdn.pixabay.com/photo/2022/12/28/20/26/kitchen-7683739_1280.png'} txt={"Cooking"} />
    <SmCard link={"/books/gardening"} imgSrc={'https://cdn.pixabay.com/photo/2016/03/31/15/42/background-1293488_1280.png'} txt={"Gardening"} />
    </div>
  )
}

export default Categories