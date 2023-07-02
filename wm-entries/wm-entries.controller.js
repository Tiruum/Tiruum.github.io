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
exports.WmEntriesController = void 0;
const common_1 = require("@nestjs/common");
const wm_entries_service_1 = require("./wm-entries.service");
const create_wm_entry_dto_1 = require("./dto/create-wm-entry.dto");
const update_wm_entry_dto_1 = require("./dto/update-wm-entry.dto");
const swagger_1 = require("@nestjs/swagger");
const wm_entry_entity_1 = require("./entities/wm-entry.entity");
let WmEntriesController = class WmEntriesController {
    constructor(wmEntriesService) {
        this.wmEntriesService = wmEntriesService;
    }
    create(createWmEntryDto) {
        return this.wmEntriesService.create(createWmEntryDto);
    }
    findAll() {
        return this.wmEntriesService.findAll();
    }
    findById(id) {
        return this.wmEntriesService.findById(+id);
    }
    update(id, updateWmEntryDto) {
        return this.wmEntriesService.update(+id, updateWmEntryDto);
    }
    remove(id) {
        return this.wmEntriesService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание записи' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: wm_entry_entity_1.WmEntry }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wm_entry_dto_1.CreateWmEntryDto]),
    __metadata("design:returntype", void 0)
], WmEntriesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех записей' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [wm_entry_entity_1.WmEntry] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WmEntriesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение записи по Id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: wm_entry_entity_1.WmEntry }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WmEntriesController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Изменение записи' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: wm_entry_entity_1.WmEntry }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wm_entry_dto_1.UpdateWmEntryDto]),
    __metadata("design:returntype", void 0)
], WmEntriesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление записи' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WmEntriesController.prototype, "remove", null);
WmEntriesController = __decorate([
    (0, swagger_1.ApiTags)("Записи стиральной комнаты"),
    (0, common_1.Controller)('wm-entries'),
    __metadata("design:paramtypes", [wm_entries_service_1.WmEntriesService])
], WmEntriesController);
exports.WmEntriesController = WmEntriesController;
//# sourceMappingURL=wm-entries.controller.js.map