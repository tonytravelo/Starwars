import React from 'react'

export default function Starwarcard() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                <img src="./Images/people.jpg" className="card-img-top" alt="People"/>
                    <div className="card-body">
                        <h5 className="card-title">People</h5>
                    </div>
                </div>
            </div>
        <div className="col">
            <div className="card h-100">
            <img src="./Images/planets.jpg" className="card-img-top" alt="Planets"/>
            <div className="card-body">
                <h5 className="card-title">Planets</h5>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="./Images/films.jpg" className="card-img-top" alt="Films"/>
            <div className="card-body">
                <h5 className="card-title">Films</h5>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="./Images/species.jpg" className="card-img-top" alt="Species"/>
            <div className="card-body">
                <h5 className="card-title">Species</h5>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="./Images/vehicles.jpg" className="card-img-top" alt="Vehicles"/>
            <div className="card-body">
                <h5 className="card-title">Vehicles</h5>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="./Images/starships.jpg" className="card-img-top" alt="Starships"/>
            <div className="card-body">
                <h5 className="card-title">Starships</h5>
            </div>
            </div>
        </div>
    </div>
  )
}