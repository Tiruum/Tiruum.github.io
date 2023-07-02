"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_entry_dto_1 = require("./create-entry.dto");
class UpdateEntryDto extends (0, swagger_1.PartialType)(create_entry_dto_1.CreateEntryDto) {
}
exports.UpdateEntryDto = UpdateEntryDto;
//# sourceMappingURL=update-entry.dto.js.map