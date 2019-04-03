import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'

const posts = [{
    id: "0",
    description: "Cute Doggo-1",
    imageLink: "https://newevolutiondesigns.com/images/freebies/dog-wallpaper-12.jpg"
    }, {
    id: "1",
    description: "Cute Doggo-2",
    imageLink: "https://newevolutiondesigns.com/images/freebies/dog-wallpaper-23.jpg"
    }, {
    id: "2",
    description: "Lighthouse",
    imageLink: "https://wonderfulengineering.com/wp-content/uploads/2016/01/live-wallpapers-32.jpg"
    }, {
    id: "3",
    description: "Sleeping Kitten",
    imageLink: "http://avante.biz/wp-content/uploads/Pictures-Of-Cute-Kittens-Wallpapers/Pictures-Of-Cute-Kittens-Wallpapers-021.jpg"
    }, {
    id: "4",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
   

class Main extends Component{
    render(){
        return (
            <div>
                <Title title={'PhotoWall'}/>
                <PhotoWall posts={posts}/>
            </div>
        )
    }
}

export default Main