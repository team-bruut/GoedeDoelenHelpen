using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoedeDoelenHelpen.Migrations
{
    public partial class MessageRemove : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FacebookRecords_AspNetUsers_ApplicationUserId1",
                table: "FacebookRecords");

            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.DropIndex(
                name: "IX_FacebookRecords_ApplicationUserId1",
                table: "FacebookRecords");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId1",
                table: "FacebookRecords");

            migrationBuilder.AlterColumn<string>(
                name: "ApplicationUserId",
                table: "FacebookRecords",
                nullable: false,
                oldClrType: typeof(Guid));

            migrationBuilder.AddColumn<string>(
                name: "Message",
                table: "Donations",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FacebookRecords_ApplicationUserId",
                table: "FacebookRecords",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_FacebookRecords_AspNetUsers_ApplicationUserId",
                table: "FacebookRecords",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FacebookRecords_AspNetUsers_ApplicationUserId",
                table: "FacebookRecords");

            migrationBuilder.DropIndex(
                name: "IX_FacebookRecords_ApplicationUserId",
                table: "FacebookRecords");

            migrationBuilder.DropColumn(
                name: "Message",
                table: "Donations");

            migrationBuilder.AlterColumn<Guid>(
                name: "ApplicationUserId",
                table: "FacebookRecords",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId1",
                table: "FacebookRecords",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Content = table.Column<string>(maxLength: 255, nullable: false),
                    DonationId = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(maxLength: 64, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Messages_Donations_DonationId",
                        column: x => x.DonationId,
                        principalTable: "Donations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FacebookRecords_ApplicationUserId1",
                table: "FacebookRecords",
                column: "ApplicationUserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_DonationId",
                table: "Messages",
                column: "DonationId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_FacebookRecords_AspNetUsers_ApplicationUserId1",
                table: "FacebookRecords",
                column: "ApplicationUserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
