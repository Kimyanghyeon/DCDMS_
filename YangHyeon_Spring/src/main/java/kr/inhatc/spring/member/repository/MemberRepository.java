package kr.inhatc.spring.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.inhatc.spring.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

	Member findByEmail(String email);

	Member findById(String id);

}// end of interface
