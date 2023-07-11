// <!-- ************************** -->
// <!-- Newsletter Form -->
// <!-- Set class container on div -->
// <!-- ************************** -->
export default function NewsletterForm() {
  return (
    <div className="">
      <h4>Sign up for our newsletter</h4>
      <form>
        {/* <!-- ************************** -->
            <!-- divs for text inputs -->
            <!-- Set class mb-3 on outer div -->
            <!-- Set class mb-3 on inner div div -->
            <!-- ************************** --> */}

        <div class="mb-3">
          <div class="mb-3">
            {/* <!-- ************************** -->
                <!-- Labels & for Text inputs -->
                <!-- Set class form-label on label -->
                <!-- Set class form-control on input -->
                <!-- ************************** --> */}
            <label for="name" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="name" />
          </div>
          {/* <!-- ************************** -->
              <!-- Labels & for Text inputs -->
              <!-- Set class form-label on label -->
              <!-- Set class form-control on div -->
              <!-- ************************** --> */}
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            No trees will be harmed in delivering our newsletters
          </div>
        </div>

        {/* <!-- ************************** -->
            <!-- Checkbox 1 -->
            <!-- Set classes mb-3 form-check on div -->
            <!-- Set class form-check-input on input -->
            <!-- Set class form-check-label on label -->
            <!-- ************************** --> */}

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Send me promo codes daily!
          </label>
        </div>
        {/*     
            <!-- ************************** -->
            <!-- Select/Options/dropdown menu -->
            <!-- Set class form-select on select tag-->
            <!-- ************************** --> */}

        <p>Select frequency of newsletters</p>
        <select class="form-select" aria-label="Default weekly">
          <option selected>Weekly</option>
          <option value="1">Daily</option>
          <option value="2">Hourly</option>
          <option value="3">Monthly</option>
          <option value="3">Annually</option>
        </select>
        {/* <!-- ************************** -->
            <!-- Checkbox 2 (make into a switch w. Bootstrap) -->
            <!-- Set classes mb-3 form-check form-switch on div -->
            <!-- Set class form-check-input on input -->
            <!-- Set class form-check-label on label -->
            <!-- ************************** --> */}

        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            checked
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Send my info to affiliates
          </label>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
    </div>
  );
}
