using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoedeDoelenHelpen.Migrations
{
    public partial class fbData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AccessToken",
                table: "FacebookRecords",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "ExpiresIn",
                table: "FacebookRecords",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "FacebookUserId",
                table: "FacebookRecords",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SignedRequest",
                table: "FacebookRecords",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AccessToken",
                table: "FacebookRecords");

            migrationBuilder.DropColumn(
                name: "ExpiresIn",
                table: "FacebookRecords");

            migrationBuilder.DropColumn(
                name: "FacebookUserId",
                table: "FacebookRecords");

            migrationBuilder.DropColumn(
                name: "SignedRequest",
                table: "FacebookRecords");
        }
    }
}
