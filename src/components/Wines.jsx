import axios from "axios";
import { useEffect, useState } from "react";
const { VITE_API_URL } = import.meta.env;

export default () => {
  const [wines, setWines] = useState([]);
  const [producers, setProducers] = useState([]);
  const [country, setCountry] = useState();
  const [formData, setFormData] = useState({
    name: "",
    producer: "",
    year: "",
    cover: "",
    country: "",
  });

  let isFormValid =
    formData.name.trim().length > 0 &&
    formData.producer !== "" &&
    formData.year !== "" &&
    formData.cover !== "" &&
    formData.country !== "";

  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/wines`)
      .then((obj) => setWines(obj.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/producers`)
      .then((obj) => setProducers(obj.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/countries`)
      .then((obj) => setCountry(obj.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="2col-wrapper">
      <section className="section col-left">
        <div className="container">
          <h1>Wines</h1>

          {wines === undefined && <p>Loading...</p>}
          {wines.length === 0 ? (
            <p>No wine found</p>
          ) : (
            <div className="cards-wrapper">
              {wines.map((w, i) => {
                return (
                  <div key={`wine-${i}`} className="card">
                    <h3>{w.name}</h3>
                    <p>{w.year}</p>
                    <p>{w.country}</p>
                    <p>{w.producers}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="section colf-right">
        <div className="container">
          <h3>Add a wine</h3>

          <label>
            <b>Name</b>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </label>

          <label>
            <b>Year</b>
            <input
              type="number"
              value={formData.year}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  year: e.target.value,
                })
              }
            />
          </label>

          <label>
            <b>Cover image url</b>
            <input
              type="text"
              value={formData.cover}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  cover: e.target.value,
                })
              }
            />
          </label>

          <label>
            <b>Producer</b>
            <select
              name="producer"
              value={formData.producer}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  producer: e.target.value,
                })
              }
            >
              <option value="">Select producer</option>
              {producers.map((p) => {
                return (
                  <option key={p._id} value={p._id}>
                    {p.name}
                  </option>
                );
              })}
            </select>
          </label>

          {/* <label>
            <b>Country</b>
            <select
              name="country"
              value={formData.country}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  country: e.target.value,
                })
              }
            > */}
          {/* <option value="">Select country</option>
              {country.map((c) => {
                return (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </label>

          <button
            disabled={!isFormValid}
            onClick={() => {
              console.log(wines);
            }}
          ></button> */}
        </div>
      </section>
    </div>
  );
};
