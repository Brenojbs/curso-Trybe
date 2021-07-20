const { sum, myRemove } = require("./script.js");

describe ('Testa se sum soma dois number', () => {
  
    test('testa 4 + 5 se é igual a 9', () => {
          expect(sum(4, 5)).toBe(9);
      });
  
    test('testa 0 + 0 se é igual a 9', () => {
      expect(sum(0, 0)).toBe(0);
      });
  
    test('testa falha passando uma string', () => {
      expect(() => {
          sum(4, '5')
      }).toThrow();
    });
  
  });

  let array = [1, 2, 3, 4];
  let ar = [1, 2, 4];

  describe ('Testes unitarios.', () => {
		test('Se vai retornar o array sem alterar.', () => {
			expect(myRemove(array, '')).toEqual(array)
		});

		test('Se vai retornar array completo.', () => {
			expect(myRemove(array, 3)).toEqual(ar)
		});
		test('Se não retorna o array completo', () => {
			expect(myRemove(array, 3)).not.toEqual(array)
		});
		
  });
