import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

export default function SortForm() {
    const [searchParams] = useSearchParams()

    const [load, setLoad] = useState(false)

    const [lowest, setLowest] = useState('')
    const [highest, setHighest] = useState('')

    const [sortBy, setSortBy] = useState('normal')

    const [fee, setFee] = useState(null)
    const [sale, setSale] = useState(null)

    const [action, setAction] = useState('on')
    const [adventure, setAdventure] = useState('on')
    const [fps, setFps] = useState('on')
    const [horror, setHorror] = useState('on')
    const [intelligence, setInteligence] = useState('on')
    const [multiplayer, setMultiplayer] = useState('on')
    const [sport, setSport] = useState('on')

    function onLowestChange(event) {
        setLowest(event.target.value)
    }
    function onHighestChange(event) {
        setHighest(event.target.value)
    }
    function onSelectChange(event) {
        setSortBy(event.target.value);
    };

    useEffect(() => {
        setLoad(true)

        setLowest(searchParams.get('lowest') === null ? '' : searchParams.get('lowest'))
        setHighest(searchParams.get('highest') === null ? '' : searchParams.get('highest'))

        setSortBy(searchParams.get('sortBy') === null ? 'normal' : searchParams.get('sortBy'))

        setFee(searchParams.get('fee') === null ? null : searchParams.get('fee') === 'true')
        setSale(searchParams.get('sale') === null ? null : searchParams.get('sale') === 'true')

        setAction(searchParams.get('action') === 'on')
        setAdventure(searchParams.get('adventure') === 'on')
        setFps(searchParams.get('fps') === 'on')
        setHorror(searchParams.get('horror') === 'on')
        setInteligence(searchParams.get('intelligence') === 'on')
        setMultiplayer(searchParams.get('multiplayer') === 'on')
        setSport(searchParams.get('sport') === 'on')
    }, [searchParams])

    const reset = () => {
        setLowest('')
        setHighest('')

        setSortBy('normal')

        setFee(null)
        setSale(null)

        setAction('on')
        setAdventure('on')
        setFps('on')
        setHorror('on')
        setInteligence('on')
        setMultiplayer('on')
        setSport('on')

        document.getElementById('value').checked = false
        document.getElementById('free').checked = false

        document.getElementById('sale-1').checked = false
        document.getElementById('sale-0').checked = false

        document.getElementById('action').checked = true
        document.getElementById('adventure').checked = true
        document.getElementById('fps').checked = true
        document.getElementById('horror').checked = true
        document.getElementById('intelligence').checked = true
        document.getElementById('multiplayer').checked = true
        document.getElementById('sport').checked = true
    }
    const loadSearchParams = () => {
        if (load) {
            return <form className="form-option" name="form" action="" method="GET">
                <div className="order-index-1">
                    <span>M???c gi??:  </span>
                    <input id="lowest" type="number" name="lowest" placeholder="Th???p nh???t" className="price-option" value={lowest} onChange={onLowestChange} />
                    <span> - </span>
                    <input id="highest" type="number" name="highest" placeholder="Cao nh???t" className="price-option" value={highest} onChange={onHighestChange} />
                </div>
                <div className="order-index-2">
                    <label htmlFor="order">S???p x???p theo: </label>
                    <select name="sortBy" id="sort" className="select" value={sortBy} onChange={onSelectChange}>
                        <option value="normal">M???c ?????nh</option>
                        <option value="decreasePrice">M???c gi?? cao ?????n th???p</option>
                        <option value="increasePrice">M???c g???? th???p ?????n cao</option>
                        <option value="decreaseRates">????nh gi?? cao ?????n th???p</option>
                        <option value="increaseRates">????nh gi?? th???p ?????n cao</option>
                        <option value="bestSeller">B??n ch???y</option>
                    </select>
                </div>
                <div className="order-index-3">
                    <span>Ph??:</span>
                    <input type="radio" id="value" name="fee" value="true" defaultChecked={fee === null ? false : fee} />
                    <label htmlFor="value" style={{ marginRight: "5%" }}>C?? ph??</label>
                    <input type="radio" id="free" name="fee" value="false" defaultChecked={fee === null ? false : !fee} />
                    <label htmlFor="free">Mi???n ph??</label>
                </div>
                <div className="order-index-4">
                    <span>Gi??:</span>
                    <input type="radio" id="sale-1" name="sale" value="true" defaultChecked={sale === null ? false : sale} />
                    <label htmlFor="sale-1" style={{ marginRight: "5%" }}>Gi???m gi??</label>
                    <input type="radio" id="sale-0" name="sale" value="false" defaultChecked={sale === null ? false : !sale} />
                    <label htmlFor="sale-0">Kh??ng gi???m gi??</label>
                </div>
                <div className="order-index-5">
                    <label htmlFor="action">Action</label>
                    <input type="checkbox" id="action" name="action" defaultChecked={action} />

                    <label htmlFor="adventure">Adventure</label>
                    <input type="checkbox" id="adventure" name="adventure" defaultChecked={adventure} />

                    <label htmlFor="fps">FPS</label>
                    <input type="checkbox" id="fps" name="fps" defaultChecked={fps} />

                    <label htmlFor="horror">Horror</label>
                    <input type="checkbox" id="horror" name="horror" defaultChecked={horror} />
                    <br />
                    <label htmlFor="intelligence">Intelligence</label>
                    <input type="checkbox" id="intelligence" name="intelligence" defaultChecked={intelligence} />

                    <label htmlFor="multiplayer">Multiplayer</label>
                    <input type="checkbox" id="multiplayer" name="multiplayer" defaultChecked={multiplayer} />

                    <label htmlFor="sport">Sport</label>
                    <input type="checkbox" id="sport" name="sport" defaultChecked={sport} />
                </div>
                <div>
                    <Link to="/products?action=on&adventure=on&fps=on&horror=on&intelligence=on&multiplayer=on&sport=on">
                        <button id="reset" className="filter-button" onClick={reset}>RESET</button>
                    </Link>
                    <button type="submit" className="filter-button">L???C</button>
                </div>
            </form >
        }
        else {
            return <></>
        }
    }
    return <>{loadSearchParams()}</>
}
