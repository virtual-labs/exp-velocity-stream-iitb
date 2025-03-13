function activity2() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <p style="text-align:left;">
         A stream function is given by,
      </p>
      <p>
         &Psi; = 6x - 5y
      </p>
      <div id="act2-d-psi-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  \\frac{\\partial\\psi}{\∂x} = 
               $$
            </div>
            <div class="col-md-3">
               <input type='text' style="margin:0 5px; width:70%" id='act2-dx-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
               \\frac{\\partial\\psi}{\∂y} = 
               $$
            </div>
            <div class="col-md-3">
               <input type='text' style="margin:0 5px; width:70%" id='act2-dy-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_d_psi_a2();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function verify_d_psi_a2() {
    let dx_inp = (document.getElementById('act2-dx-inp'));
    let dy_inp = (document.getElementById('act2-dy-inp'));
    console.log(dx_a2, dy_a2);
    if (!verify_values(parseFloat(dx_inp.value), dx_a2)) {
        dx_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        dx_inp.style.border = '1px solid #ced4da';
        dx_inp.disabled = true;
    }
    if (!verify_values(parseFloat(dy_inp.value), dy_a2)) {
        dy_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        dy_inp.style.border = '1px solid #ced4da';
        dy_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-d-psi-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         \\frac{\\partial\\psi}{\∂x} = ${dx_a2} 
      $$
      $$
         \\frac{\\partial\\psi}{\∂y} = ${dy_a2} 
      $$
   </p>
   <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn1" onclick='load_u_v_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_u_v_div_a2() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div id="act2-u-v-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               u = -\\frac{\∂\ψ}{\∂y} =
            $$
         </div>
         <div class="col-md-3">
            <input type='number' style="margin:0 5px; width:70%" id='act2-u-inp' class='form-control fs-16px' />
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               v = \\frac{\∂\ψ}{\∂x} =
            $$
         </div>
         <div class="col-md-3">
            <input type='number' style="margin:0 5px; width:70%" id='act2-v-inp' class='form-control fs-16px' /> 
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_uv_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_uv_a2() {
    let u_inp = (document.getElementById('act2-u-inp'));
    let v_inp = (document.getElementById('act2-v-inp'));
    console.log(u_a2, v_a2);
    if (!verify_values(parseFloat(u_inp.value), u_a2)) {
        u_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        u_inp.style.border = '1px solid #ced4da';
        u_inp.disabled = true;
    }
    if (!verify_values(parseFloat(v_inp.value), v_a2)) {
        v_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        v_inp.style.border = '1px solid #ced4da';
        v_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-u-v-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         u = -\\frac{\∂\\psi}{\∂y} = ${u_a2}
      $$
      $$
         v = \\frac{\∂\\psi}{\∂x} = ${v_a2}
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act2-btn2" onclick='load_resultant_direction_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_resultant_direction_div_a2() {
    let btn = (document.getElementById('act2-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div id="act2-res-dir-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               Resultant = \\sqrt{u^2 + v^2} = 
            $$
         </div>
         <div class="col-md-3">
            <input type='number' style="margin:0 5px; width:70%" id='act2-res-inp' class='form-control fs-16px' />
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               \θ = tan^{-1}\\left(\\frac{v}{u}\\right) = 
            $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:50%" id='act2-dir-inp' class='form-control fs-16px' /> <span style="display:contents;">&deg;</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_res_dir_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_res_dir_a2() {
    let res_inp = (document.getElementById('act2-res-inp'));
    let dir_inp = (document.getElementById('act2-dir-inp'));
    console.log(result, dir);
    if (!verify_values(parseFloat(res_inp.value), result)) {
        res_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        res_inp.style.border = '1px solid #ced4da';
        res_inp.disabled = true;
    }
    if (!verify_values(parseFloat(dir_inp.value), dir)) {
        dir_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        dir_inp.style.border = '1px solid #ced4da';
        dir_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-res-dir-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         Resultant = \\sqrt{u^2 + v^2} = ${result}
      $$
      $$
         \θ = tan^{-1}\\left(\\frac{v}{u}\\right) = ${dir} \°
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act2-btn3" onclick='activity3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
// activity2();
//# sourceMappingURL=activity2.js.map