﻿// <auto-generated />
using System;
using GoedeDoelenHelpen.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace GoedeDoelenHelpen.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.0-rtm-30799")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GoedeDoelenHelpen.Data.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(64);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(64);

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NameInsertion")
                        .IsRequired()
                        .HasMaxLength(64);

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.Donation", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Amount");

                    b.Property<Guid>("EventUserId");

                    b.Property<DateTime>("Timestamp");

                    b.HasKey("Id");

                    b.HasIndex("EventUserId");

                    b.ToTable("Donations");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.EmailRecord", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email")
                        .IsRequired();

                    b.Property<Guid>("EventUserId");

                    b.Property<DateTime>("TimeStamp");

                    b.HasKey("Id");

                    b.HasIndex("EventUserId");

                    b.ToTable("EmailRecords");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.Event", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Description")
                        .HasMaxLength(255);

                    b.Property<DateTime>("EndDate");

                    b.Property<DateTime>("EndEvent");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<Guid>("ReceivingPartyId");

                    b.Property<DateTime>("StartDate");

                    b.Property<DateTime>("StartEvent");

                    b.HasKey("Id");

                    b.HasIndex("ReceivingPartyId");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.EventInvite", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Accepted");

                    b.Property<string>("Email")
                        .IsRequired();

                    b.Property<Guid>("EventUserId");

                    b.Property<DateTime>("Timestamp");

                    b.HasKey("Id");

                    b.HasIndex("EventUserId");

                    b.ToTable("EventInvites");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.EventSubscription", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<Guid>("EventUserId");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.HasIndex("EventUserId");

                    b.ToTable("EventSubscriptions");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.EventUser", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("ApplicationUserId")
                        .IsRequired();

                    b.Property<Guid>("EventId");

                    b.Property<int>("EventUserRole");

                    b.Property<DateTime>("LastEmail");

                    b.Property<DateTime>("LastFacebook");

                    b.Property<DateTime>("LastLogin");

                    b.HasKey("Id");

                    b.HasIndex("ApplicationUserId");

                    b.HasIndex("EventId");

                    b.ToTable("EventUsers");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.FacebookRecord", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("EventUserId");

                    b.Property<DateTime>("TimeStamp");

                    b.HasKey("Id");

                    b.HasIndex("EventUserId");

                    b.ToTable("FacebookRecords");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.Foundation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FiscusNumber");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Foundations");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<Guid>("DonationId");

                    b.Property<string>("Name")
                        .HasMaxLength(64);

                    b.HasKey("Id");

                    b.HasIndex("DonationId")
                        .IsUnique();

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.ReceivingParty", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("ANBIId");

                    b.Property<string>("Description")
                        .HasMaxLength(255);

                    b.Property<string>("FiscalNumber")
                        .IsRequired()
                        .HasMaxLength(14);

                    b.Property<string>("IBAN")
                        .IsRequired()
                        .HasMaxLength(34);

                    b.Property<int>("KvKNumber");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("ReceivingParties");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.ViewRecord", b =>
                {
                    b.Property<string>("SessionId");

                    b.Property<Guid>("EventId");

                    b.Property<DateTime>("Timestamp");

                    b.HasKey("SessionId", "EventId");

                    b.HasAlternateKey("EventId", "SessionId");

                    b.ToTable("ViewRecords");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.Donation", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.EventUser", "EventUser")
                        .WithMany("Donations")
                        .HasForeignKey("EventUserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.EmailRecord", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.EventUser", "EventUser")
                        .WithMany("EmailRecords")
                        .HasForeignKey("EventUserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.Event", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.ReceivingParty", "ReceivingParty")
                        .WithMany("Events")
                        .HasForeignKey("ReceivingPartyId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.EventInvite", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.EventUser", "EventUser")
                        .WithMany("EventInvites")
                        .HasForeignKey("EventUserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.EventSubscription", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.EventUser", "EventUser")
                        .WithMany("EventSubscriptions")
                        .HasForeignKey("EventUserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.EventUser", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.ApplicationUser", "ApplicationUser")
                        .WithMany("EventUsers")
                        .HasForeignKey("ApplicationUserId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("GoedeDoelenHelpen.Data.Event", "Event")
                        .WithMany("EventUsers")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.FacebookRecord", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.EventUser", "EventUser")
                        .WithMany("FacebookRecords")
                        .HasForeignKey("EventUserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.Message", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.Donation", "Donation")
                        .WithOne("Message")
                        .HasForeignKey("GoedeDoelenHelpen.Data.Message", "DonationId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("GoedeDoelenHelpen.Data.ViewRecord", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.Event", "Event")
                        .WithMany("ViewRecords")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GoedeDoelenHelpen.Data.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("GoedeDoelenHelpen.Data.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
