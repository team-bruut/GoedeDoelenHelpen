using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoedeDoelenHelpen.Migrations
{
    public partial class makeemailandnameuniqueforcharity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Charities",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.CreateIndex(
                name: "IX_Charities_Email",
                table: "Charities",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Charities_Name",
                table: "Charities",
                column: "Name",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Charities_Email",
                table: "Charities");

            migrationBuilder.DropIndex(
                name: "IX_Charities_Name",
                table: "Charities");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Charities",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
