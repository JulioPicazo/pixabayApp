import React, { Component } from 'react';
 
export class Buscador extends Component {
    render() {
        return (
            <form>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control form-control-lg" 
                            placeholder="Buscador"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" 
                            placeholder="Click"></input>
                    </div>
                </div>
            </form>
        );
    }
}
