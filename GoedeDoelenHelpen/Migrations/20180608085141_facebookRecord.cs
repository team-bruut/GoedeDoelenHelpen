using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoedeDoelenHelpen.Migrations
{
    public partial class facebookRecord : Migration
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
                name: "UserId",
                table: "FacebookRecords",
                nullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "Amount",
                table: "Donations",
                nullable: false,
                oldClrType: typeof(decimal));

            migrationBuilder.AlterColumn<string>(
                name: "NameInsertion",
                table: "AspNetUsers",
                maxLength: 64,
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 64);

            migrationBuilder.AddColumn<Guid>(
                name: "FacebookRecordId",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

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
                name: "IX_AspNetUsers_FacebookRecordId",
                table: "AspNetUsers",
                column: "FacebookRecordId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FacebookPost_EventUserId",
                table: "FacebookPost",
                column: "EventUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_FacebookRecords_FacebookRecordId",
                table: "AspNetUsers",
                column: "FacebookRecordId",
                principalTable: "FacebookRecords",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_FacebookRecords_FacebookRecordId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "FacebookPost");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_FacebookRecordId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "FacebookRecords");

            migrationBuilder.DropColumn(
                name: "FacebookRecordId",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "ApplicationUserId",
                table: "FacebookRecords",
                newName: "EventUserId");

            migrationBuilder.AlterColumn<decimal>(
                name: "Amount",
                table: "Donations",
                nullable: false,
                oldClrType: typeof(double));

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
