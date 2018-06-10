using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoedeDoelenHelpen.Migrations
{
    public partial class facebookRecords : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FacebookRecords_EventUsers_EventUserId",
                table: "FacebookRecords");

            migrationBuilder.DropIndex(
                name: "IX_FacebookRecords_EventUserId",
                table: "FacebookRecords");

            migrationBuilder.RenameColumn(
                name: "EventUserId",
                table: "FacebookRecords",
                newName: "ApplicationUserId");

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId1",
                table: "FacebookRecords",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FBUserId",
                table: "FacebookRecords",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "NameInsertion",
                table: "AspNetUsers",
                maxLength: 64,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 64);

            migrationBuilder.CreateTable(
                name: "FacebookPost",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    likes = table.Column<int>(nullable: false),
                    TimeStamp = table.Column<DateTime>(nullable: false),
                    EventUserId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FacebookPost", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FacebookPost_EventUsers_EventUserId",
                        column: x => x.EventUserId,
                        principalTable: "EventUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FacebookRecords_ApplicationUserId1",
                table: "FacebookRecords",
                column: "ApplicationUserId1");

            migrationBuilder.CreateIndex(
                name: "IX_FacebookPost_EventUserId",
                table: "FacebookPost",
                column: "EventUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_FacebookRecords_AspNetUsers_ApplicationUserId1",
                table: "FacebookRecords",
                column: "ApplicationUserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FacebookRecords_AspNetUsers_ApplicationUserId1",
                table: "FacebookRecords");

            migrationBuilder.DropTable(
                name: "FacebookPost");

            migrationBuilder.DropIndex(
                name: "IX_FacebookRecords_ApplicationUserId1",
                table: "FacebookRecords");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId1",
                table: "FacebookRecords");

            migrationBuilder.DropColumn(
                name: "FBUserId",
                table: "FacebookRecords");

            migrationBuilder.RenameColumn(
                name: "ApplicationUserId",
                table: "FacebookRecords",
                newName: "EventUserId");

            migrationBuilder.AlterColumn<string>(
                name: "NameInsertion",
                table: "AspNetUsers",
                maxLength: 64,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 64,
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FacebookRecords_EventUserId",
                table: "FacebookRecords",
                column: "EventUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_FacebookRecords_EventUsers_EventUserId",
                table: "FacebookRecords",
                column: "EventUserId",
                principalTable: "EventUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
