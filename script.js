// Dados de exemplo para macros, tópicos e subtópicos
const data = {
  macro1: {
    name: "Chamados",
    topics: [
      {
        name: "Gestão de chamados",
        subtopics: [
          { name: "Abrir um chamado",
            details: "Ao abrir um chamado atente-se ao correto preenchimento dos campos e direcionamento." +
              "<br>Para chamados de solicitação de criação de usuário, enviar as informações completas do usuário conforme orientação." +
              "<br>Para chamados de solicitação de manutenção, enviar informações completas sobre o problema conforme orientação." +
          },
          {
        name: "Orientações para abertura de chamado",
        subtopics: [
          { name: "Solicitações de equipamentos e softwares", 
            details: "Solicitações sobre compra, manutenção, configuração e instalação de equipamentos como: <br>" +
            "Computadores, impressoras, teclados, mouses, scanners e outros periféricos;<br>" +
            "Solicitações de autorização de despesas referentes a equipamentos e softwares;<br>" +
            "Solicitações sobre internet, e-mail, PSI, etc.<br>" +
            "Nesses casos você pode falar com Fabrício, Lucas ou Rogério." },
          { name: "Solicitações sobre operação do sistema", 
            details: "Para registrar algum problema no sistema; <br> Apoio técnico sobre a operação do sistema; <br> Solicitações de senhas do TI; <br> Cadastros de usuários; <br>" +
            "Transferência de usuários entre filiais;<br>" +
            "Nesses casos você pode falar com Ricardo ou Afrânio." },
          { name: "Solicitações sobre alterações no sistema", 
            details: "<b>Apenas para reportar algum erro crítico no sistema ou solicitar novas funcionalidades.</b> <br>" +
            "Nesses casos você pode falar com Aluízio ou André." }
        ]
      }
    ]
  },
  macro2: {
    name: "Apoio ao Suporte",
    topics: [
      {
        name: "Sistema - Configurações",
        subtopics: [
          { name: "Parâmetros Gerais",
             details: "Padrão para criação de novos usuários: Primeiro nome + número da filial (sem zero à esquerda) e sem espaço.<br>" +
            "Ex: Usuário: João Silva - Filial 0629 - Login: JOAO629<br><br><br>"
          }
        ]
      },
      {
        name: "Regras Gerais e Orientações Úteis",
        subtopics: [
          { name: "Alteração de Forma de Pagamento", 
            details: "Forma de pagamento só altera se tiver link pago." },
          { name: "Baixar entrega sem quilometragem", 
            details: "Para baixar entrega com quilometragem tem que colocar a quilometragem, salvar e só depois fazer a baixa. <br>" +
             "Caso baixe sem salvar a quilometragem antes, vai ficar só a baixa normal. <br>" +
             "Para corrigir esses casos tem que cancelar a baixa e depois baixar com a quilometragem." },
          { name: "Cancelar uma baixa no pix e fazer outra no cartão", 
            details: "Imprimir o comprovante do cartão, cancelar a baixa e depois baixar sem tef." },
          { name: "Envio de Fotos para Assistência", 
            details: "Fotos para assistência é só para madeira e só permite inserir depois que a assistência aceita o pedido de assistência." },
          { name: "Retorno de erro da SEFAZ de schema XML em notas", 
            details: "Geralmente é algum dado do cliente incorreto ou falta de forma de pagamento na nota." },
          { name: "Senha de devolução", 
            details: "Somente com Orlei ou Rodolfo." },
          { name: "Sobre NF`s", 
            details: "NFCe - Temos autonomia para colocar e tirar de CONTINGÊNCIA<br> NFe - Só a SEFAZ libera para colocar em CONTINGÊNCIA.<br><br>" +
                  "<b>Toda nota Fiscal para PJ tem que importar o valor cheio do documento</b> (Importar o pedido e alterar no combo)<br>" +
                  "No caso de colocar o valor cheio dos produtos na nota:<br>" +
                  "Importar pedido -> Marcar Valor a prazo documento -> Pegar a SENHA DE IMPORTAÇÃO COM A CONTABILIDADE -> Pegar a SENHA DE VALOR CHEIO COM ASSISTENTE COMERCIAL" }
        ]
      },
      {
        name: "Operações",
        subtopics: [
          { name: "Cadastrar entrega que não consta no relatório", 
            details: "Manutenção -> Entrega -> Cadastro de entrega." },
          { name: "Cancelar baixa de CHEQUE", 
            details: "FINANCEIRO -> Cheques Recebidos -> Cancela baixa / Recebimento." },
          { name: "Devolução por pedido", 
            details: "Para fazer uma devolução por pedido, siga os passos abaixo:<br>" +
                     "Acesse: Movimentação -> Estoque -> Devolução -> Devolução por pedido<br>" +
                     "Digite o número do Pedido e clique no botão OK.</b> <br>" +
                     "Na primeira grade de registros vai aparecer os dados da venda. Na grade mais abaixo, vai aparecer os dados das mercadorias" +
                     "Escolha qual mercadoria será devolvida, selecionando uma por vez e clique na seta verde com sentido para DIREITA (->) para adicionar o item na devolução.<br>" +
                     "Se quiser devolver todas as mercadorias, clique diretamente na seta vermelha com sentido para DIREITA (->).<BR>" +
                     "Após selecionar as mercadorias, clique no botão FECHAMENTO <br>" +
                     "Se o sistema exibir uma CHAVE DE LIBERAÇÃO pedindo uma senha, solicite a senha ao Orlei ou Rodolfo."},    
          { name: "Imprimir nota a partir do cupom fiscal", 
            details: "Utilitários -> Gerador de senha para filiais ===>>> <br>" + 
            "Se for NFE: -> Página 1 -> Senha -> Nota Fiscal -> Importar Documento já importado em outra nota<br>" +
            "Se for NFC-E: -> Página 2 -> Senha -> Venda ECF -> Importação de documento. <br>" +
            "Pegar a senha com a contabilidade" },
          { name: "Reimprimir NFCe", 
            details: "NFCe -> NFCe Gerenciamento -> Selecione a data, clique em OK -> Selecione a nota -> Clique em outras opções -> Reimprimir NFCe/ Danfe." },
          { name: "Retirar produto da reserva", 
            details: "Selecionar a pré-venda -> Clicar no produto que deseja remover da reserva -> Ir em outras opções -> Reserva -> Retirar reserva do item selecionado." },
          { name: "Ver quem excluiu a pré-venda", 
            details: "Entrar com a senha do gerente -> Consultas -> Pré-venda." }
        ]
      }
    ]
  },

    macro3: {
    name: "Operações mais frequentes (Sistema)",
    topics: [
      {
        name: "Configurações pessoais de usuário",
        subtopics: [
          { name: "Alteração da senha pelo usuário", 
            details: "Tela principal -> Menu Cadastros -> Trocar a senha do usuário ativo." }
        ]
      },
      {
        name: "Consultas e Relatórios",
        subtopics: [
          { name: "Reimprimir relatório de fechamento de caixa", 
            details: "Consultas - Financeiro/Títulos a receber -> Fechamento de caixa -> Pegar a senha com o financeiro." },
          { name: "Reimprimir comprovante de TEF", 
            details: "Consulta -> Financeiro -> Resumo de Caixa -> Selecione a data -> Selecione o comprovante -> Imprimir comprovante de TEF." },
          { name: "Consultar Folha Resumida", 
            details: "Financeiro -> Caixa -> Folha Resumida." },
          { name: "Consultar Resumo de Caixa", 
            details: "Financeiro/Títulos a receber -> Resumo de caixa." },
          { name: "Consultar Vendas por período", 
            details: "Relatório -> Vendas/Cupons -> Vendas por período." },
          { name: "Consultar Pedido por período", 
            details: "Consulta -> Vendas -> Pedido por período." },
            { name: "Conferência de Caixa", 
            details: "Se o caixa estiver ABERTO use o RESUMO DE CAIXA.<br>"+
            "Se o caixa estiver FECHADO use o FECHAMENTO DE CAIXA."}
        ]
      },
      {
        name: "Correção de Notas Fiscais",
        subtopics: [
          { name: "Colocar valor cheio na nota", 
            details: "Tela principal -> Nota fiscal Geral (Clientes, Empresas, Etc.) -> Preencha os dados corretos do destinatário (Aba F4) -> " +
            "Volte na aba de Dados da nota (Aba F2) -> Importação de Documento -> Importar Itens do Pedido -> Insira o número do documento -> " + 
            "Abra o Listbox e selecione VALOR A PRAZO DO DOCUMENTO -> " + 
            "Em OPÇÕES desmarque os dois checkbox: <br>" + 
            "[] - Importar Dados Limpando Digitação Atual <br>" + 
            "[] - Importar Dados do Destinatário do Documento Selecionado <br>" + 
            "E clique no botão IMPORTAR Documento Selecionado -> Pegar a SENHA DE IMPORTAÇÃO COM A CONTABILIDADE -> Pegar a SENHA DE VALOR CHEIO COM ASSISTENTE COMERCIAL" }
        ]
      },
      {
        name: "Orientações sobre o caixa",
        subtopics: [
          { name: "Sobre o fechamento de caixa", 
            details: "O ideal é fechar o caixa no final do dia, consultando todos os links que existirem e logo em seguida fechar o caixa.<br>" +
            "Caso o cliente pague o link até meia-noite, no dia seguinte quando consultar, ele estará com o status pago e a venda pode ser baixada.<br>" + 
            "Caso o cliente não pague o link até meia-noite, no dia seguinte ele estará com o status expirado e a pré venda pode ser cancelada.<br><br>" +
            "Certifique-se de seguir todos os passos corretamente para evitar problemas:<br>" +
            "1 - Quem estiver no caixa, tem a obrigação de fechar o caixa ao final do dia;<br>" +
            "2 - Ao tentar fechar o caixa, se existir algum recebimento à vista não baixado, você deve baixá-lo e fechar o caixa;<br>" +
            "3 - Em caso de links pagos, você deve baixar a venda, o recebimento de parcelas e fechar o caixa;<br>" +
            "4 - Se existir links pendentes, você deve consultá-los no gerenciamento de link e em seguida efetuar o fechamento."
         },
         { name: "Sobre conferência financeira fechamento de caixa", 
            details: "1 - Pegue todos os comprovantes de cartão, vá em CONSULTAS -> VENDAS -> PEDIDO POR PERÍODO e confira pedido por pedido, se a forma de pagamento no pedido de venda está EXATAMENTE igual ao comprovante do cartão referente ao mesmo.<br>" +
            "2 - No RESUMO DE CAIXA faça a conferência das financeiras que foram lançadas com os comprovantes que você tem no caixa.<br>" +
            "3 - Feito isso, e estando tudo certo, ainda com os comprovantes em mãos você irá conferir financeira por financeira e verificar se as mesmas estão cadastradas EXATAMENTE como os comprovantes.<br>" +
            "4 - Caso tenha que arrumar alguma financeira, você tem que ir em FINANCEIRO -> FINANCEIRA -> ALTERAÇÃO e excluir a financeira errada, depois ir em FINANCEIRO -> FINANCEIRA -> CADASTRO e cadastrar corretamente.<br>" +
            "5 - Por fim conferir a FOLHA MANUAL RESUMIDA se está tudo certo.<br>" +
            "6 - Caso as financeiras estejam corretas, mas na folha manual resumida somente os valores de cartão crédito e cartão débito estejam divergentes; na FOLHA MANUAL RESUMIDA, você vai clicar duas vezes em cima do nome \"TOTAL DO CAIXA\" para o sistema atualizar os valores."
          },
          { name: "Quando o PRODUTO RESERVADO JÁ NÃO ESTÁ DISPONÍVEL", 
            details: "Para tirar o produto da reserva: Selecionar a pré-venda -> Clicar no produto que deseja remover da reserva -> " + 
            "Ir em outras opções -> Reserva -> Retirar reserva do item selecionado." }
        ]
      },
      {
        name: "Orientações sobre o link de pagamento",
        subtopics: [
          { name: "Forma de pagamento para o link", 
            details: "Só usa CIELO quem usa a SAFRA, caso contrário é VISA." }
        ]
      },
      {
        name: "Orientações sobre despesas",
        subtopics: [
          { name: "Solicitações para habilitar em outros computadores", 
            details: "Com a mudança no sistema de despesas as solicitações de despesa agora são realizadas apenas pelos computadores dos caixas e secretárias." }
        ]
      },
      {
        name: "Orientações sobre entregas",
        subtopics: [
          { name: "Baixar entrega sem quilometragem", 
            details: "Para baixar entrega com quilometragem tem que colocar a quilometragem, salvar e só depois fazer a baixa. <br>" +
                    "Caso baixe sem salvar a quilometragem antes, vai ficar só a baixa normal. <br>" +
                    "Para corrigir esses casos tem que cancelar a baixa e depois baixar com a quilometragem." },
          { name: "Consultando, cancelando baixa e alterando entregas", 
            details: "1º - Você tem que saber qual tipo de entrega foi colocado no pedido de venda: CONSULTAS -> VENDAS -> PEDIDO POR PERÍODO;<br>" +  
                      "Selecione o pedido desejado e na guia dos produtos, role a barra de rolagem e localize o tipo de entrega.<br>" +
                      "Feito isso:<br>" +
                      "ENTREGA NO ATO - O sistema ao finalizar a venda gera um romaneio com valor zerado e sem entregador. " +
                      "No gerenciamento de entrega, localize a entrega e cancele a mesma, logo após vá em cadastro de entrega " +
                      "(lembrando que o tipo de entrega na tela de cadastro tem que ser o mesmo tipo que está no pedido de venda para você conseguir localizar para cadastrar) e cadastre a mesma para o entregador.<br>" +
                      "ENTREGA AGENDADA - O sistema ao baixar a venda NÃO gera romaneio algum, você tem que ir em cadastro de entrega e cadastrar o mesmo para o entregador.<br>" +
                      "Caso tenha baixado uma entrega errada, no gerenciamento de entrega, localize a entrega baixada e vá em OPÇÕES, logo em seguida em CANCELAR BAIXA, a mesma irá voltar para a situação de Pendente no gerenciamento de entrega.<br>" +
                      "Para localizar os romaneios, sempre verifique se nos filtros na parte superior das telas de gerenciamento e cadastro estejam selecionados corretamente de acordo com o tipo de entrega que está no pedido de venda na mercadoria em questão.<br>" +
                      "Para pedidos que estejam com a situação TROCADO ou DEVOLVIDO o sistema não permite gerar romaneio de entrega porque o pedido já foi entregue antes." }
        ]
      },
      {
        name: "Solicitações referentes às máquinas de cartão",
        subtopics: [
          { name: "Máquinas de cartão e seu software", 
            details: "Contato da Linx:<br>" +
            "Você vai entrar nesse link:<br>"+
            "<a href='https://www.cappta.com.br/contato/'>https://www.cappta.com.br/contato/</a><br>"+
            "Vai rolar a pagina ate o final, ai você vai ver os números para contato de suporte."
           }
        ]
      }
    ]
  }
};

const macroList = document.getElementById('macro-list');
const topicMenu = document.getElementById('topic-menu');
const subtopicsDiv = document.getElementById('subtopics');
const detailsSection = document.getElementById('details');

let currentMacro = 'macro1';
let currentTopicIndex = 0;

// Delegação de eventos para botões dentro da área de detalhes
detailsSection.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('button[data-action="abrir-chamado"]')) {
    alert('Abrir chamado');
  }
  if (target.matches('button[data-action="ver-tutorial"]')) {
    alert('Ver tutorial');
  }
});

// Renderiza tópicos do macro selecionado
function renderTopics(macroKey) {
  topicMenu.innerHTML = '';
  if (!data[macroKey] || !Array.isArray(data[macroKey].topics)) {
    subtopicsDiv.innerHTML = '';
    detailsSection.innerHTML = '<p>Selecione um macro válido para carregar os tópicos.</p>';
    return;
  }
  const topics = data[macroKey].topics;
  topics.forEach((topic, idx) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = topic.name;
    btn.className = idx === 0 ? 'active' : '';
    btn.onclick = () => {
      document.querySelectorAll('#topic-menu button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSubtopics(macroKey, idx);
    };
    li.appendChild(btn);
    topicMenu.appendChild(li);
  });
  renderSubtopics(macroKey, 0);
}

// Renderiza subtópicos do tópico selecionado
function renderSubtopics(macroKey, topicIdx) {
  subtopicsDiv.innerHTML = '';
  const subtopics = data[macroKey].topics[topicIdx].subtopics;
  subtopics.forEach((sub, idx) => {
    const btn = document.createElement('button');
    btn.textContent = sub.name;
    btn.onclick = () => {
      document.querySelectorAll('.subtopics button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDetails(sub.details);
    };
    subtopicsDiv.appendChild(btn);
  });
  detailsSection.innerHTML = '<p>Selecione um subtópico para ver os detalhes.</p>';
}

// Renderiza detalhes do subtópico
function renderDetails(text) {
  detailsSection.innerHTML = text;
}

// Troca macro
macroList.querySelectorAll('li').forEach((li, idx) => {
  li.onclick = () => {
    macroList.querySelectorAll('li').forEach(l => l.classList.remove('active'));
    li.classList.add('active');
    currentMacro = li.getAttribute('data-macro');
    renderTopics(currentMacro);
  };
});

// Inicialização
renderTopics(currentMacro);
