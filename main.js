"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const logger_middleware_1 = require("./logger.middleware");
async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('DASR Dorm Rest Apiссался')
        .setDescription('Rest api приложение для работы студенческих сервисов общежития ФАКТ')
        .setVersion('1.0.0')
        .setContact('Timur Selin', 'https://vk.com/tiruum', 'selin.ta@phystech.edu')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    app.use(logger_middleware_1.logger);
    await app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
}
start();
//# sourceMappingURL=main.js.map