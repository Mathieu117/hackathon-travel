import React from 'react';
import "../styles/PropositionList.css"

const array = [

    {id : 1,
    country : 'Espagne',
    city : 'Madrid',
    serie : 'Casa de Papel',
    affiche : 'https://static.posters.cz/image/750webp/101932.webp',
    airbnb : 'https://www.airbnb.fr/s/Madrid/homes' },
    
    {id : 2,
    country : 'Nouveau-Mexique',
    city : 'Albuquerque',
    serie : 'Breaking Bad',
    affiche : 'https://storage.googleapis.com/pod_public/1300/124250.jpg',
    airbnb : 'https://www.airbnb.fr/s/Albuquerque/homes' },
    
    {id : 3,
    country : 'Colombie',
    city : 'Medellin',
    serie : 'Narcos',
    affiche : 'https://static.posters.cz/image/750webp/31851.webp',
    airbnb : 'https://www.airbnb.fr/s/Medellin/homes' },
    
    {id : 4,
    country : 'USA',
    city : 'Manhattan',
    serie : 'Suits',
    affiche : 'https://www.ecranlarge.com/uploads/image/001/028/suits-avocats-sur-mesure-photo-1028301.jpg',
    airbnb : 'https://www.airbnb.fr/s/Manhattan/homes' },
    
    {id : 5,
    country : 'Danemark',
    city : 'Copenhague',
    serie : 'Vikings',
    affiche : 'https://m.media-amazon.com/images/I/61noa0sujTL._AC_SY679_.jpg',
    airbnb : 'https://www.airbnb.fr/s/Copenhague/homes' },
    
    {id : 6,
    country : 'Italie',
    city : 'Rome',
    serie : 'Rome',
    affiche : 'https://www.ecranlarge.com/uploads/image/001/149/1a1bwgwo3sw379vehr0vktue3xw-682.jpg',
    airbnb : 'https://www.airbnb.fr/s/Rome/homes' },
    
    {id : 7,
    country : 'France',
    city : 'Paris',
    serie : 'Lupin',
    affiche : 'https://fr.web.img6.acsta.net/pictures/20/12/02/16/24/1535547.jpg',
    airbnb : 'https://www.airbnb.fr/s/Paris/homes' },
    
    {id : 8,
    country : 'Angleterre',
    city : 'Birmingham',
    serie : 'Peaky Blinders',
    affiche : 'https://fr.web.img3.acsta.net/pictures/22/06/07/11/57/5231272.jpg',
    airbnb : 'https://www.airbnb.fr/s/Birmingham/homes' },
    
    {id : 9,
    country : 'USA',
    city : 'New-York',
    serie : 'YOU',
    affiche : 'https://fr.web.img6.acsta.net/pictures/18/10/22/11/41/0937031.jpg',
    airbnb : 'https://www.airbnb.fr/s/New-York/homes' },
    
    {id : 10,
    country : 'USA',
    city : 'Washington',
    serie : 'House of Cards',
    affiche : 'https://fr.web.img4.acsta.net/pictures/19/07/18/10/08/0353053.jpg',
    airbnb : 'https://www.airbnb.fr/s/Washington/homes' },
    
    {id : 11,
    country : 'USA',
    city : 'Milwaukee',
    serie : 'Dahmer',
    affiche : 'https://fr.web.img4.acsta.net/pictures/22/09/17/18/16/3249476.jpg',
    airbnb : 'https://www.airbnb.fr/s/Milwaukee/homes' },
    
    {id : 12,
    country : 'USA',
    city : 'Scranton',
    serie : 'The Office',
    affiche : 'https://fr.web.img5.acsta.net/r_1280_720/pictures/14/02/04/13/20/128334.jpg',
    airbnb : 'https://www.airbnb.fr/s/Scranton/homes' },
    
    {id : 13,
    country : 'USA',
    city : 'San Jose',
    serie : 'Good Doctor',
    affiche : 'https://www.ecranlarge.com/uploads/image/001/408/53wqewbwqq3wso6cowkznbym43-176.jpg',
    airbnb : 'https://www.airbnb.fr/s/San-Jose/homes' },
    
    {id : 14,
    country : 'USA',
    city : 'Los Angeles',
    serie : 'Le Prince de Bel-Air',
    affiche : 'https://www.dhresource.com/0x0/f2/albu/g9/M00/47/6F/rBVaVVv1F9SAJp9gAAbXLVRQ-WI339.jpg',
    airbnb : 'https://www.airbnb.fr/s/Los-Angeles/homes' },
    
    {id : 15,
    country : 'Canada',
    city : 'Toronto',
    serie : 'The Handmaids tale',
    affiche : 'https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/026/the-handmaid-s-tale-saison-2-affiche-1026318.jpg',
    airbnb : 'https://www.airbnb.fr/s/Toronto/homes' },
    
    {id : 16,
    country : 'USA',
    city : 'Pasadena',
    serie : 'The Big Bang Theory',
    affiche : 'https://static.posters.cz/image/1300/art-photo/the-big-bang-theory-equipe-i106240.jpg',
    airbnb : 'https://www.airbnb.fr/s/Pasadena/homes' },
    
    {id : 17,
    country : 'USA',
    city : 'Baltimore',
    serie : 'The Wire',
    affiche : 'https://fr.web.img4.acsta.net/pictures/21/02/11/13/49/0944070.jpg',
    airbnb : 'https://www.airbnb.fr/s/Baltimore/homes' },
    
    {id : 18,
    country : 'USA',
    city : 'Honolulu',
    serie : 'Lost',
    affiche : 'https://m.media-amazon.com/images/I/317I44JE+JL._AC_.jpg',
    airbnb : 'https://www.airbnb.fr/s/Honolulu/homes' },
    
    {id : 19,
    country : 'Croatie',
    city : 'Dubrovnik',
    serie : 'Game of Thrones',
    affiche : 'https://m.media-amazon.com/images/I/61+5mMtkPbL._AC_SL1024_.jpg',
    airbnb : 'https://www.airbnb.fr/s/Dubrovnik/homes' },
    
    {id : 20,
    country : 'Japon',
    city : 'Tokyo',
    serie : 'Alice in Borderland',
    affiche : 'https://fr.web.img6.acsta.net/pictures/20/11/06/12/24/4584296.jpg',
    airbnb : 'https://www.airbnb.fr/s/Tokyo/homes' },
    
    {id : 21,
    country : 'Ukraine',
    city : 'Tchernobyl',
    serie : 'Chernobyl',
    affiche : 'https://fr.web.img6.acsta.net/r_1920_1080/pictures/21/02/11/14/15/4218723.jpg',
    airbnb : 'https://www.airbnb.fr/s/Chernobyl/homes' },
    
    {id : 22,
    country : 'Angleterre',
    city : 'Londres',
    serie : 'Sex Education',
    affiche : 'https://fr.web.img5.acsta.net/r_1280_720/pictures/19/01/03/10/55/2296345.jpg',
    airbnb : 'https://www.airbnb.fr/s/Londres/homes' },
    
    {id : 23,
    country : 'USA',
    city : 'Atlanta',
    serie : 'Stranger Things',
    affiche : 'https://waasabi.com/medias/158646037680.jpg',
    airbnb : 'https://www.airbnb.fr/s/Atlanta/homes' },
    
    {id : 24,
    country : 'USA',
    city : 'Miami',
    serie : 'Dexter',
    affiche : 'https://fr.web.img6.acsta.net/r_1280_720/pictures/210/489/21048948_20131011212508917.jpg',
    airbnb : 'https://www.airbnb.fr/s/Miami/homes' },
    
    {id : 25,
    country : 'USA',
    city : 'Brooklyn',
    serie : 'Brooklyn Nine-Nine',
    affiche : 'https://fr.web.img5.acsta.net/r_1280_720/pictures/20/01/10/10/23/0734068.jpg',
    airbnb : 'https://www.airbnb.fr/s/Brooklyn/homes' },
    
    {id : 26,
    country : 'Ecosse',
    city : 'Glasgow',
    serie : 'Andor',
    affiche : 'https://fr.web.img6.acsta.net/pictures/22/09/12/09/51/0326456.jpg',
    airbnb : 'https://www.airbnb.fr/s/Glasgow/homes' }
    ]
const PropositionList = () => {
    
    return (
        <div className='choice'>
            {array.map((e) => {
                return <div className='card'><img src={e.affiche} alt="affiche" /></div>
            })}
        </div>
    );
};

export default PropositionList;