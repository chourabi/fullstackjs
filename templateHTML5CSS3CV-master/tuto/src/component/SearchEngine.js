import React from 'react';


class SearchEngine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            marks: [
                { id: 1, label: "BMW" },
                { id: 2, label: "Audi" }
            ],
            models: [
                { id: 1, mark: 1, label: "X1" },
                { id: 2, mark: 1, label: "X2" },
                { id: 3, mark: 2, label: "A4" },
                { id: 4, mark: 2, label: "Q7" },

            ],
            etats: [
                { id: 1, label: "New" },
                { id: 2, label: "Used" }
            ],
            cars: [
                { id: 1, mark: 1, model: 1, etat: 1, titre: "BMW X1 super charged", ch: 45, img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/45242/bmw-x1-facelift-right-front-three-quarter2.jpeg?q=85" },
                { id: 2, mark: 1, model: 1, etat: 2, titre: "BMW X1 bonne occasion", ch: 40, img: "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/BMW-X1-25i-my20-tw-10x5-%281%291.jpg" },
                { id: 3, mark: 2, model: 3, etat: 1, titre: "Audi A4 neuf", ch: 60, img: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2019-Audi-A4-45-TFSI-sedan-grey-Peter-Anderson-1001x565p-%281%29.jpg" },
                { id: 4, mark: 2, model: 3, etat: 2, titre: "Audi A4 occasion", ch: 60, img: "https://images.sandicliffe.co.uk/vehicles/car/fv09fze/thumbs/1100_637556.jpeg" },

            ],

            selectedMark: "-1",
            selectedModel:"-1",
            selectedEtat:"-1"
        }
    }



    render() {
        return (
            <div>
                <div className="search-engine">
                    <label htmlFor="mark">
                        <   strong>Mark</strong>
                    </label><br />
                    <select id="mark" onChange={(e) => {console.log(e.target.value); this.setState({ selectedMark: e.target.value,selectedModel:"-1", selectedEtat:"-1"}) }} >
                        <option value={-1}>-----------Choose a mark------</option>
                        {
                            this.state.marks.map((mark) => {
                                return (<option key={mark.id} value={mark.id}> {mark.label} </option>);
                            })
                        }
                    </select>
                    <br />
                    {
                        // start of model bloc
                    }

                    {
                        this.state.selectedMark !== "-1" ?
                            <div>
                                <label htmlFor="mark">
                                    <   strong>Model</strong>
                                </label><br />
                                <select id="model" onChange= { (e)=>{ this.setState({selectedModel:e.target.value,selectedEtat:"-1"}) } } >
                                    <option value="-1">-----------Choose a model------</option>
                                    {
                                        this.state.models.map((model) => {
                                           if (model.mark === Number.parseInt(this.state.selectedMark)) {
                                            return (<option value={model.id}> {model.label} </option>);
                                           }
                                        })
                                    }
                                </select>
                            </div>
                            :
                            <div></div>
                    }

                    {
                        this.state.selectedModel !== "-1" ?
                        <div>
                            <label htmlFor="mark">
                                <   strong>Etat</strong>
                            </label><br />
                            <select id="etat" onChange= { (e)=>{ this.setState({selectedEtat:e.target.value}) } } >
                                <option value="-1">-----------Choose etat ------</option>
                                {
                                    this.state.etats.map((etat) => {
                                       
                                        return (<option value={etat.id}> {etat.label} </option>);
                                       
                                    })
                                }
                            </select>
                        </div>
                        :
                        <div></div>

                    }



                </div>
                <div className="resultat">
                    {
                        this.state.cars.map((car)=>{
                            console.log(car);

                            if (this.state.selectedMark !== "-1") {
                                if (car.mark === Number.parseInt(this.state.selectedMark)) {
                                    if (this.state.selectedModel !== "-1") {
                                        //
                                        if (car.model === Number.parseInt(this.state.selectedModel)) {
                                           if (this.state.selectedEtat !== "-1") {
                                                if (car.etat === Number.parseInt(this.state.selectedEtat)) {
                                                    return(
                                                        <div>
                                                            <h3> {car.titre} </h3>
                                                            <img src={car.img} width={250}/>
                                                        </div>
                                                    );        
                                                } 
                                           }else{
                                            return(
                                                <div>
                                                    <h3> {car.titre} </h3>
                                                    <img src={car.img} width={250}/>
                                                </div>
                                            );
                                           }    
                                        }
                                    }else{
                                        return(
                                            <div>
                                                <h3> {car.titre} </h3>
                                                <img src={car.img} width={250}/>
                                            </div>
                                        );
                                    }
                                }
                            }else{
                                return(
                                    <div>
                                        <h3> {car.titre} </h3>
                                        <img src={car.img} width={250}/>
                                    </div>
                                );
                            }

                        })
                    }
                </div>
            </div>
        );
    }


}


export default SearchEngine;