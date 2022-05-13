import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import HeroCard from './HeroCard'

const HeroList = ({publisher}) => {

    const heroes = useMemo(() =>getHeroByPublisher(publisher),[publisher])

    return (
        <div className='animate__animated animate__fadeIn row rows-cols-1 row-cols-md-3 g-3 '>

                {heroes.map(heroe => (
                    <HeroCard key={heroe.id} {...heroe}/> 
                ))}

        </div>
    )
}

export default HeroList