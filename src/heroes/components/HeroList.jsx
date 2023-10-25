import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";


export const HeroList = ({publisher}) => {

    const heroList = useMemo( () => getHeroesByPublisher(publisher), [  publisher ]) ;

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {heroList.map( hero => {
            return <HeroCard key={hero.id} hero={hero}/>
        })}
    </div>
  )
}
