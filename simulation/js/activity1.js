let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Velocity Potential function & Stream function</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act1() {
    let btn = (document.getElementById('temp-btn-1'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <p style="text-align:left;">
         The velocity potential function is given by,
      </p>
      <p>
         &Phi; = 6(x<sup>2</sup> - y<sup>2</sup>)
      </p>
      <p style="text-align:left;">
         Find the velocity component at (${x_a1},${y_a1})  
      </p>
      <div id="act1-d-phi-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  \\frac{\\partial\\phi}{\∂x} = 
               $$
            </div>
            <div class="col-md-3">
               <input type='text' style="margin:0 5px; width:70%" id='act1-dx-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
               \\frac{\\partial\\phi}{\∂y} = 
               $$
            </div>
            <div class="col-md-3">
               <input type='text' style="margin:0 5px; width:70%" id='act1-dy-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_d_phi_a1();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function verify_d_phi_a1() {
    let dx_inp = (document.getElementById('act1-dx-inp'));
    let dy_inp = (document.getElementById('act1-dy-inp'));
    let dx_str = dx_inp.value.split(' ').join('');
    let dy_str = dy_inp.value.split(' ').join('');
    console.log(dx_a1, dy_a1);
    if (dx_str != dx_a1) {
        dx_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        dx_inp.style.border = '1px solid #ced4da';
        dx_inp.disabled = true;
    }
    if (dy_str != dy_a1) {
        dy_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        dy_inp.style.border = '1px solid #ced4da';
        dy_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-d-phi-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \\frac{\\partial\\phi}{\∂x} = ${dx_a1}
         $$
         $$
            \\frac{\\partial\\phi}{\∂y} = ${dy_a1}
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn1" onclick='load_u_v_div_a1();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_u_v_div_a1() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div id="act1-u-v-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               u = -\\frac{\∂\ϕ}{\∂x} = -${dx_a1} =
            $$
         </div>
         <div class="col-md-3">
            <input type='number' style="margin:0 5px; width:70%" id='act1-u-inp' class='form-control fs-16px' />
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               v = -\\frac{\∂\ϕ}{\∂y} = 12y =
            $$
         </div>
         <div class="col-md-3">
            <input type='number' style="margin:0 5px; width:70%" id='act1-v-inp' class='form-control fs-16px' /> 
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_uv_a1();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_uv_a1() {
    let u_inp = (document.getElementById('act1-u-inp'));
    let v_inp = (document.getElementById('act1-v-inp'));
    console.log(u_a1, v_a1);
    if (!verify_values(parseFloat(u_inp.value), u_a1)) {
        u_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        u_inp.style.border = '1px solid #ced4da';
        u_inp.disabled = true;
    }
    if (!verify_values(parseFloat(v_inp.value), v_a1)) {
        v_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        v_inp.style.border = '1px solid #ced4da';
        v_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-u-v-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         u = -\\frac{\∂\ϕ}{\∂x} = -${dx_a1} = ${u_a1}
      $$
      $$
         v = -\\frac{\∂\ϕ}{\∂y} = 12y = ${v_a1}
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act1-btn2" onclick='activity2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
activity1();
//# sourceMappingURL=activity1.js.map