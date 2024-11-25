// ===== Activity 1 variables ===== //
let x_a1 = 3;
let y_a1 = 6;
let dx_a1 = '12x';
let dy_a1 = '-12y';
let u_a1 = -12 * x_a1;
let v_a1 = 12 * y_a1;
// ===== Activity 2 variable ===== //
let dx_a2 = 6;
let dy_a2 = -5;
let u_a2 = -dy_a2;
let v_a2 = dx_a2;
let result = parseFloat(Math.sqrt(Math.pow(u_a2, 2) + Math.pow(v_a2, 2)).toFixed(3));
let dir = parseFloat((Math.atan2(v_a2, u_a2) * (180 / Math.PI)).toFixed(2));
// ===== Activity 3 variables ===== //
let x_a3 = 5;
let y_a3 = 4;
let u_a3 = '1-2y';
let v_a3 = '-2x';
let dy_a3 = '2y-1';
let dx_a3 = '-2x';
let psi1_a3 = 'y^2-y';
let k_a3 = '-x^2';
let psi2_a3 = 'y^2-y-x^2';
let psi_p_a3 = Math.pow(y_a3, 2) - y_a3 - Math.pow(x_a3, 2);
//# sourceMappingURL=data.js.map