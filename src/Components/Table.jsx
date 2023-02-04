import "bootstrap/dist/css/bootstrap.min.css";

export default function Tables() {
  return (
    <div class="container ">
      <div className="p-3 mb-5 mt-5 bg-body">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary me-md-2" type="button">
            + new vehicle
          </button>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Vehicle ID</th>
                  <th>Type</th>
                  <th>Lock/Unlock</th>
                  <th>Speed</th>
                  <th>Battery</th>
                  <th>Status</th>
                  <th>Location</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>155564</td>
                  <td>Scooter</td>
                  <td>Lock</td>
                  <td>0 km/h</td>
                  <td>100%</td>
                  <td>PARKING</td>
                  <td>3.142,012</td>
                  <td>2019-07-02 10:00AM</td>
                </tr>
                <tr>
                  <td>155564</td>
                  <td>Scooter</td>
                  <td>Unlock</td>
                  <td>5 km/h</td>
                  <td>75%</td>
                  <td>MOVING</td>
                  <td>3.142,012</td>
                  <td>2019-07-02 10:00AM</td>
                </tr>

                <tr>
                  <td>155564</td>
                  <td>Scooter</td>
                  <td>Unlock</td>
                  <td>0 km/h</td>
                  <td>50%</td>
                  <td>IDLING</td>
                  <td>3.142,012</td>
                  <td>2019-07-02 9:00AM</td>
                </tr>

                <tr>
                  <td>155564</td>
                  <td>Scooter</td>
                  <td>Lock</td>
                  <td>0 km/h</td>
                  <td>15%</td>
                  <td>TOWING</td>
                  <td>3.142,012</td>
                  <td>2019-07-02 10:00AM</td>
                </tr>

                <tr>
                  <td>155564</td>
                  <td>Scooter</td>
                  <td>Lock</td>
                  <td>0 km/h</td>
                  <td>0%</td>
                  <td>TOWING</td>
                  <td>3.142,012</td>
                  <td>2019-07-02 10:00AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
