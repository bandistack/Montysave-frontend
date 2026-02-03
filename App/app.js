function calcular() {
      const ingreso = Number(document.getElementById("ingreso").value);
        const gastos = Number(document.getElementById("gastos").value);

          if (!ingreso || !gastos) {
              alert("Ingresa todos los valores");
                  return;
                    }

                      const restante = ingreso - gastos;

                        if (restante <= 0) {
                            document.getElementById("resultado").innerText =
                                  "Tus gastos superan tus ingresos 😬";
                                      return;
                                        }

                                          const ahorro = restante * 0.2;
                                            const gustos = restante * 0.8;

                                              document.getElementById("resultado").innerHTML = `
                                                  <p>Dinero disponible: $${restante}</p>
                                                      <p>Ahorro recomendado: $${ahorro}</p>
                                                          <p>Gastos personales: $${gustos}</p>
                                                            `;
                                                            }
                                                            
}