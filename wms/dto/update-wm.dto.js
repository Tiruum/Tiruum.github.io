"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWmDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_wm_dto_1 = require("./create-wm.dto");
class UpdateWmDto extends (0, swagger_1.PartialType)(create_wm_dto_1.CreateWmDto) {
}
exports.UpdateWmDto = UpdateWmDto;
//# sourceMappingURL=update-wm.dto.js.map