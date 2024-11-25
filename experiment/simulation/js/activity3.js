function activity3() {
    let btn = (document.getElementById('act2-btn3'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act3-div'>
      <h3>Activity 3</h3>
      <br>
      <p style="text-align:left;">
         Find stream function at P(${x_a3},${y_a3})
      </p>
      <p >
         If &Phi; = x(2y-1)
      </p>
      <div id="act3-u-v-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  u = -\\frac{\∂\ϕ}{\∂x} =  
               $$
            </div>
            <div class="col-md-3">
               <input type='text' style="margin:0 5px; width:70%" id='act3-u-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  v = -\\frac{\∂\ϕ}{\∂y} =
               $$
            </div>
            <div class="col-md-3">
               <input type='text' style="margin:0 5px; width:70%" id='act3-v-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_uv_a3();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
}
function verify_uv_a3() {
    let u_inp = (document.getElementById('act3-u-inp'));
    let v_inp = (document.getElementById('act3-v-inp'));
    let u_str = u_inp.value.split(' ').join('');
    let v_str = v_inp.value.split(' ').join('');
    console.log(u_a3, v_a3);
    if (u_str != u_a3) {
        u_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        u_inp.style.border = '1px solid #ced4da';
        u_inp.disabled = true;
    }
    if (v_str != v_a3) {
        v_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        v_inp.style.border = '1px solid #ced4da';
        v_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-u-v-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            u = -\\frac{\∂\ϕ}{\∂x} = ${u_a3}
         $$
         $$
            v = -\\frac{\∂\ϕ}{\∂y} = ${v_a3}
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act3-btn1" onclick='load_d_psi_div_a3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_d_psi_div_a3() {
    let btn = (document.getElementById('act3-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Stream function
   </p>
   <div id="act3-d-psi-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               \\frac{\\partial\\psi}{\∂y} = -u =
            $$
         </div>
         <div class="col-md-3">
            <input type='text' style="margin:0 5px; width:70%" id='act3-dy-inp' class='form-control fs-16px' />
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               \\frac{\\partial\\psi}{\∂x} = v = 
            $$
         </div>
         <div class="col-md-3">
            <input type='text' style="margin:0 5px; width:70%" id='act3-dx-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_d_psi_a3();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_d_psi_a3() {
    let dx_inp = (document.getElementById('act3-dx-inp'));
    let dy_inp = (document.getElementById('act3-dy-inp'));
    let dx_str = dx_inp.value.split(' ').join('');
    let dy_str = dy_inp.value.split(' ').join('');
    console.log(dy_a3, dx_a3);
    if (dy_str != dy_a3) {
        dy_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        dy_inp.style.border = '1px solid #ced4da';
        dy_inp.disabled = true;
    }
    if (dx_str != dx_a3) {
        dx_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        dx_inp.style.border = '1px solid #ced4da';
        dx_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-d-psi-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \\frac{\\partial\\psi}{\∂y} = -u = ${dy_a3}
         $$
         $$
            \\frac{\\partial\\psi}{\∂x} = v = ${dx_a3}
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act3-btn2" onclick='load_integration_div_a3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_integration_div_a3() {
    let btn = (document.getElementById('act3-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <p style="text-align:left">
      Note: x<sup>2</sup> to be written as x^2
   </p>
   <p>
      $$
         \∫\∂\ψ = \∫(2y-1)dy
      $$
   </p>
   <div id="act3-int-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-2">
            $$
               \ψ = 
            $$
         </div>
         <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
            <input type='text' style="margin:0 5px; width:50%" id='act3-psi1-inp' class='form-control fs-16px' /> <span style="display:contents;"> + k(constant)</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_int_a3();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_int_a3() {
    let inp = (document.getElementById('act3-psi1-inp'));
    let str = inp.value.split(' ').join('');
    console.log(psi1_a3);
    if (str != psi1_a3) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-int-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            \ψ = ${psi1_a3} + k(constant)
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act3-btn3" onclick='load_diff_div_a3();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function load_diff_div_a3() {
    let btn = (document.getElementById('act3-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act3-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left";>
      Now differentiating &Psi; with x
   </p>
   <p>
      $$
         \\frac{\∂\ψ}{\∂x} = \\frac{\∂k}{\∂x}
      $$
   </p>
   <p style="text-align:left";>
      But,
   </p>
   <p>
      $$
         \\frac{\∂\ψ}{\∂x} = -2x
      $$
   </p>
   <div id="act3-diff-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               \∴ \\frac{\∂k}{\∂x} =
            $$
         </div>
         <div class="col-md-3">
            <input type='text' style="margin:0 5px; width:70%" id='act3-dk-inp' class='form-control fs-16px' />
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               k = \∫-2xdx =
            $$
         </div>
         <div class="col-md-3">
            <input type='text' style="margin:0 5px; width:70%" id='act3-k-inp' class='form-control fs-16px' />
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               \∴ \ψ = 
            $$
         </div>
         <div class="col-md-3">
            <input type='text' style="margin:0 5px; width:70%" id='act3-psi2-inp' class='form-control fs-16px' />
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$
               \ψ \\ at \\ P =
            $$
         </div>
         <div class="col-md-3">
            <input type='text' style="margin:0 5px; width:70%" id='act3-psi-p-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_psi_p_a3();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 150);
}
function verify_psi_p_a3() {
    let dk_inp = (document.getElementById('act3-dk-inp'));
    let k_inp = (document.getElementById('act3-k-inp'));
    let psi2_inp = (document.getElementById('act3-psi2-inp'));
    let psi_p_inp = (document.getElementById('act3-psi-p-inp'));
    let dk_str = dk_inp.value.split(' ').join('');
    let k_str = k_inp.value.split(' ').join('');
    let psi2_str = psi2_inp.value.split(' ').join('');
    console.log(dx_a3, k_a3);
    console.log(psi2_a3, psi_p_a3);
    if (dk_str != dx_a3) {
        dk_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        dk_inp.style.border = '1px solid #ced4da';
        dk_inp.disabled = true;
    }
    if (k_str != k_a3) {
        k_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        k_inp.style.border = '1px solid #ced4da';
        k_inp.disabled = true;
    }
    if (psi2_str != psi2_a3) {
        psi2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        psi2_inp.style.border = '1px solid #ced4da';
        psi2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(psi_p_inp.value), psi_p_a3)) {
        psi_p_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        psi_p_inp.style.border = '1px solid #ced4da';
        psi_p_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-diff-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p>
      $$
         \∴ \\frac{\∂k}{\∂x} = ${dx_a3}
      $$
      $$
         k = \∫-2xdx = ${k_a3}
      $$
      $$
         \∴ \ψ = ${psi2_a3}
      $$
      $$
         \ψ \\ at \\ P = ${psi_p_a3}
      $$
   </p>
   <br>
   <button class='btn btn-info btn-sm std-btn' id="act3-btn4" onclick='exp_complete(this);'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function exp_complete(e) {
    let btn = (document.getElementById(`${e.id}`));
    btn && btn.remove();
    alert('Experiment completed');
}
// activity3();
//# sourceMappingURL=activity3.js.map