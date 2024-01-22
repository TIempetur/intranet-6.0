"use client"
import React, { useState } from 'react';

export default function Contato () {
  const [searchTerm, setSearchTerm] = useState('');
  const TdStyle = {
    ThStyle: `w-1/3  min-w-[50px] xl:min-w-[150px] xl:w-1/4  2xl:min-w-[250px] 2xl:w-1/4 border-l border-transparent py-4 px-3 text-2xl 2xl:text-2xl xl:text-xl  font-semibold text-white lg:py-5 lg:px-4`,
    TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-white dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-2 px-2 text-center text-lg 2xl:text-base xl:text-sm font-medium`,
    TdStyle2: `text-dark border-b border-l border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-2 px-2 text-center text-lg 2xl:text-lg xl:text-sm font-medium`,
  };

  const dadosTabela = [
    { id: 1, item: '01', setor: 'Setor de inventário turístico', telefone: '3182-8170' },
    { id: 2, item: '02', setor: 'Superíntendência de eventos', telefone: '3182-8073' },
    { id: 3, item: '03', setor: 'Central telefônica da EMPETUR', telefone: '3182-8002' },
    { id: 4, item: '04', setor: 'Arena pernambuco', telefone: '3182-8005' },
    { id: 5, item: '05', setor: 'Gerência financeira', telefone: '3182-8231' },
    { id: 6, item: '06', setor: 'Superíntendência de operações', telefone: '3182-8030' },
    { id: 7, item: '07', setor: 'Diretoria jurídica', telefone: '3182-8207' },
    { id: 8, item: '08', setor: 'Gerência de operação e manutenção', telefone: '3182-8171' },
    { id: 9, item: '09', setor: 'Diretor jurídico', telefone: '3182-8265' },
    { id: 10, item: '10', setor: 'Gabinete da presidência', telefone: '3182-8069' },
    { id: 11, item: '11', setor: 'Pro-lazer', telefone: '3182-8194' },
    { id: 12, item: '12', setor: 'Diretoria de estruturação do turismo', telefone: '3182-8230' },
    { id: 13, item: '13', setor: 'Presidente da EMPETUR', telefone: '3182-8258' },
    { id: 14, item: '14', setor: 'Setor de segurança', telefone: '3182-8026' },
    { id: 15, item: '15', setor: 'Setor de protocolo', telefone: '3182-8108' },
    { id: 16, item: '16', setor: 'Gabinete da presidência', telefone: '3182-8109' },
    { id: 17, item: '17', setor: 'Diretoria de comunicação', telefone: '3182-8153' },
    { id: 18, item: '18', setor: 'Gerência de projetos especiais', telefone: '3182-8174' },
    { id: 19, item: '19', setor: 'Gerente de comunicação', telefone: '3182-8166' },
    { id: 20, item: '20', setor: 'Assessória de controle interno', telefone: '3182-8119' },
    { id: 21, item: '21', setor: 'Gerência de contratos e convênios', telefone: '3182-8163' },
    { id: 22, item: '22', setor: 'Setor de captação de eventos', telefone: '3182-8252' },
    { id: 23, item: '23', setor: 'Setor de pesquisa', telefone: '3182-8150' },
    { id: 24, item: '24', setor: 'Diretora de comunicação', telefone: '3182-8131' },
    { id: 25, item: '25', setor: 'Recepção da EMPETUR', telefone: '3182-8096' },
    { id: 26, item: '26', setor: 'Setor de tesouraria e cobança', telefone: '3182-8179' },
    { id: 27, item: '27', setor: 'Setor de audio visual', telefone: '3182-8060' },
    { id: 28, item: '28', setor: 'Setor comercial', telefone: '3182-8042' },
    { id: 29, item: '29', setor: 'Gerência setorial contábil', telefone: '3182-8222' },
    { id: 30, item: '30', setor: 'Diretor de marketing', telefone: '3182-8219' },
    { id: 31, item: '31', setor: 'Superíntendência de fomento', telefone: '3182-8255' },
    { id: 32, item: '32', setor: 'Gabinete da vice-presiência', telefone: '3182-8210' },
    { id: 33, item: '33', setor: 'Coordenação de TI', telefone: '3182-8014' },
    { id: 34, item: '34', setor: 'Superíntendência de operações', telefone: '3182-8052' },
    { id: 35, item: '35', setor: 'Copa', telefone: '3182-8130' },
    { id: 36, item: '36', setor: 'Setor de patrimônio', telefone: '3182-8201' },
    { id: 37, item: '37', setor: 'Setor de transporte', telefone: '3182-8067' },
    { id: 38, item: '38', setor: 'Setor de compras', telefone: '3182-8059' },
    { id: 39, item: '39', setor: 'Gerência de prestação de contas', telefone: '3182-8123' },
    { id: 40, item: '40', setor: 'Diretora administrativa e financeira', telefone: '3182-8004' },
    { id: 41, item: '41', setor: 'Gerência financeira', telefone: '3182-8072' },
    { id: 42, item: '42', setor: 'Gerência geral de pessoas', telefone: '3182-8054' },
    { id: 43, item: '43', setor: 'Diretor de equipamentos', telefone: '3182-8156' },
    { id: 44, item: '44', setor: 'Diretoria de equipamentos', telefone: '3182-8043' },
    { id: 45, item: '45', setor: 'Vice-presidente', telefone: '3182-8288' },
    { id: 46, item: '46', setor: 'Central telefônica da EMPETUR', telefone: '3182-8000' },
    { id: 47, item: '47', setor: 'Setor de segurança', telefone: '3182-8080' },
    { id: 48, item: '48', setor: 'Gerência de informações turísticas', telefone: '3182-8189' },
    { id: 49, item: '49', setor: 'Presidência da EMPETUR', telefone: '3182-8097' },
    { id: 50, item: '50', setor: 'Comissão permanente de licitação II', telefone: '3182-8106' },
    { id: 51, item: '51', setor: 'Cadastur', telefone: '3182-8127' },
    { id: 52, item: '52', setor: 'Diretoria de equipamentos', telefone: '3182-8122' },
    { id: 53, item: '53', setor: 'ASTUR', telefone: '3182-8254' },
    { id: 54, item: '54', setor: 'Setor de almoxarifado', telefone: '3182-8019' },
    { id: 55, item: '55', setor: 'Setor de conservação e limpeza', telefone: '3182-8161' },
    { id: 56, item: '56', setor: 'Museu do cais do sertão', telefone: '3182-8190' },
    { id: 57, item: '57', setor: 'Setor de folha de pagamento', telefone: '3182-8218' },
    { id: 58, item: '58', setor: 'Gerência de logística e TI', telefone: '3182-8094' },
    { id: 59, item: '59', setor: 'Diretoria administrativa e financeira', telefone: '3182-8296' },
    { id: 60, item: '60', setor: 'Gerência de gestão de pessoas', telefone: '3182-8077' },
    { id: 61, item: '61', setor: 'Gabinete da presidência', telefone: '3182-8294' },
    { id: 62, item: '62', setor: 'Vice-presidência', telefone: '3182-8100' },
    { id: 63, item: '63', setor: 'Superíntendência comercial', telefone: '3182-8044' },
    { id: 64, item: '64', setor: 'Gerência de produtos turísticos', telefone: '3182-8248' },
    { id: 65, item: '65', setor: 'Comissão permanente de licitação I', telefone: '3182-8188' },
    { id: 66, item: '66', setor: 'Setor de folha de pagamento', telefone: '3182-8020' },
    { id: 67, item: '67', setor: 'Gerência administrativa', telefone: '3182-8245' },
    { id: 68, item: '68', setor: 'Gerência de Produtos Turísticos', telefone: '3182-8239' },
    // ... adicione os demais dados conforme necessário
  ];

  const filteredData = dadosTabela.filter(
    (item) =>
      item.item.includes(searchTerm) ||
      item.setor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.telefone.includes(searchTerm)
  );

  return (
    <>
      <div className="flex flex-col items-start justify-start  ">
        <input
          className="p-2 rounded-md"
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section className='bg-blue-700 shadow-2xl rounded-md   shadow-stone-500/50 w-full xl:mt-2 sm:flex sm:justify-center sm:items-center dark:bg-dark py-10 pb-20 lg:py-[05px]'>
        <div className='container '>
          <div className='flex flex-wrap '>
            <div className='w-full '>
              <div className='max-w-full overflow-x-auto  '>
              <div className='scrollbar-thin scrollbar-track-slate-400 scrollbar-thumb-slate-500 ' style={{ maxHeight: '720px', overflowY: 'auto' }}>
                <table className='w-full table-auto '>
                  <thead className='text-center bg-primary'>
                    <tr>
                      <th className={TdStyle.ThStyle}> ITEM </th>
                      <th className={TdStyle.ThStyle}> SETOR </th>
                      <th className={TdStyle.ThStyle}> TELEFONE </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredData.map((item) => (
                      <tr key={item.id}>
                        <td className={TdStyle.TdStyle}>{item.item}</td>
                        <td className={TdStyle.TdStyle2}>{item.setor}</td>
                        <td className={TdStyle.TdStyle}>{item.telefone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};


