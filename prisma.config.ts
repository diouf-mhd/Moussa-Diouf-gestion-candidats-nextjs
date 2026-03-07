import { defineConfig } from '@prisma/config'

export default defineConfig({
  datasource: {
    // On écrit l'URL en dur ici pour que Prisma la trouve à coup sûr
    url: "mysql://root:@127.0.0.1:3306/gestion_candidats",
  },
})