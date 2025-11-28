Este repositório contém os arquivos da apresentação dentro de uma subpasta.

Problema detectado
- O Vercel retorna 404/NOT_FOUND ao acessar o projeto porque, por padrão, tenta servir o conteúdo a partir da raiz do repositório. Neste projeto o `index.html` está em:

  teste/apresenta__o__desenvolvimento_neuropsicol_gico_e_autonomia_by_loyalhippo0288100 (1)/apresenta__o__desenvolvimento_neuropsicol_gico_e_autonomia_by_loyalhippo0288100 (2)/index.html

Soluções aplicadas (neste commit)
- Adicionado `vercel.json` na raiz para indicar ao Vercel que o `index.html` desejado está na subpasta e para rotear todas as requisições para ele.

Alternativas (se preferir não usar o vercel.json)
1) Configurar o "Root Directory" do projeto no painel do Vercel para a subpasta acima.
2) Mover o conteúdo do diretório `teste/... (2)` para a raiz do repositório.

Como redeployar / testar
1) Fazer commit e push das alterações (se ainda não tiver feito).
2) No Vercel: Deploys → New Deploy (ou aguardar o auto-deploy do push). O deploy agora deverá encontrar o `index.html`.

Comando opcional (PowerShell) para deploy via Vercel CLI:

```powershell
npm install -g vercel; vercel login; vercel --prod --debug
```

Se o problema persistir, cole aqui o log de erro completo (ou o output de `vercel --debug`) e eu analiso com mais detalhe.
