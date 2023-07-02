"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesController = void 0;
const common_1 = require("@nestjs/common");
const entries_service_1 = require("./entries.service");
const create_entry_dto_1 = require("./dto/create-entry.dto");
const update_entry_dto_1 = require("./dto/update-entry.dto");
const swagger_1 = require("@nestjs/swagger");
let EntriesController = class EntriesController {
    constructor(entriesService) {
        this.entriesService = entriesService;
    }
    create(createEntryDto) {
        return this.entriesService.create(createEntryDto);
    }
    findAll() {
        return this.entriesService.findAll();
    }
    findOne(id) {
        return this.entriesService.findOne(+id);
    }
    update(id, updateEntryDto) {
        return this.entriesService.update(+id, updateEntryDto);
    }
    remove(id) {
        return this.entriesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_dto_1.CreateEntryDto]),
    __metadata("design:returntype", void 0)
], EntriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_entry_dto_1.UpdateEntryDto]),
    __metadata("design:returntype", void 0)
], EntriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntriesController.prototype, "remove", null);
EntriesController = __decorate([
    (0, swagger_1.ApiTags)('Записи'),
    (0, common_1.Controller)('entries'),
    __metadata("design:paramtypes", [entries_service_1.EntriesService])
], EntriesController);
exports.EntriesController = EntriesController;
//# sourceMappingURL=entries.controller.js.map