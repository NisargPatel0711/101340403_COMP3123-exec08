import React from "react";
import Data from "./Data";

const INITIAL_VALUES = {
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    postalcode: "",
    send: false,
};

export default class DataForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_VALUES };
        this.province = [
            "Choose Province",
            "Alberta",
            "British Columbia",
            "Manitoba",
            "New Brunswick",
            "Newfoundland and Labrador",
            "Northwest Territories",
            "Nova Scotia",
            "Nunavut",
            "Ontario",
            "Prince Edward Island",
            "Quebec",
            "Saskatchewan",
            "Yukon Territory",
        ];
    }

    onSubmitLogin = (event) => {
        event.preventDefault();
        this.setState({ send: true });
    };

    clearForm = (event) => {
        event.preventDefault();
        this.setState({ ...INITIAL_VALUES });
    };

    onValueChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <>
                <div className="border rounded border-primary p-2 mt-3">
                    <h1 className="text-center mb-4">Data Entry Form</h1>
                    <form>
                        <div className="row mb-3">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input
                                    type="email"
                                    className="form-control mt-2"
                                    id="inputEmail4"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={(event) =>
                                        this.onValueChanged(event)
                                    }
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputFullName">Name</label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    id="inputFullName"
                                    name="name"
                                    placeholder="Enter full name"
                                    value={this.state.name}
                                    onChange={(event) =>
                                        this.onValueChanged(event)
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label for="inputAddress">Address</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                id="inputAddress"
                                name="address"
                                placeholder="1234 Main St"
                                value={this.state.address}
                                onChange={(event) => this.onValueChanged(event)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label for="inputAddress2">Address 2</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                id="inputAddress2"
                                name="address2"
                                placeholder="Apartment, studio, or floor"
                                value={this.state.address2}
                                onChange={(event) => this.onValueChanged(event)}
                            />
                        </div>
                        <div className="row mb-3">
                            <div className="form-group col-md-4">
                                <label for="inputCity">City</label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    name="city"
                                    id="inputCity"
                                    value={this.state.city}
                                    onChange={(event) =>
                                        this.onValueChanged(event)
                                    }
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">Province</label>
                                <select
                                    id="inputState"
                                    className="form-control form-select mt-2"
                                    name="province"
                                    onChange={this.onValueChanged}
                                >
                                    {this.province.map((province) => (
                                        <option key={province} value={province}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputZip">Postal Code</label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    name="postalcode"
                                    id="inputZip"
                                    value={this.state.postalcode}
                                    onChange={(event) =>
                                        this.onValueChanged(event)
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    required
                                />
                                <label
                                    className="form-check-label"
                                    for="gridCheck"
                                >
                                    Agree Terms & Conditions ?
                                </label>
                            </div>
                        </div>
                        <div className="form-group text-center">
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary m-2"
                                onClick={this.onSubmitLogin}
                                name="btnSubmit"
                            >
                                Submit
                            </button>
                            <button
                                type="reset"
                                className="btn btn-lg btn-danger m-2"
                                onClick={this.clearForm}
                                name="btnReset"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    {this.state.send && (
                        <div className="border rounded border-success p-2 mt-3 mb-3">
                            <Data
                                email={this.state.email}
                                name={this.state.name}
                                address={this.state.address}
                                address2={this.state.address2}
                                city={this.state.city}
                                postalcode={this.state.postalcode}
                                province={this.state.province}
                            />
                        </div>
                    )}
                </div>
            </>
        );
    }
}
